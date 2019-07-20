import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import Follows from "../pages/Follows";
import Color from "../pages/Color";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import User from "../pages/User";

import {NavLink,Route,Redirect,Switch} from 'react-router-dom'
import Reg from "../pages/Reg";
import ErrorPage from "../pages/ErrorPage";
import Loading from "../components/loading/Loading";

import PubSub from 'pubsub-js'
import Loading2 from "../components/loading2/Loading2";


class App extends React.Component{
    state={
        bNav:true,
        bFoot:true,
        bLoading:false
    };
    token = null;

    constructor(){
        super();
        //订阅
        this.token = PubSub.subscribe("VIEW",(evname,payload)=>{
            console.log('app',evname, payload);
            this.setState({bLoading:payload})
        })
    }

    checkPath(path){
        if (/home|follow|column/.test(path)){
            this.setState({bNav:true,bFoot:true})
        }
        if (/login|reg|detail/.test(path)){
            this.setState({bNav:false,bFoot:false})
        }
        if (/user/.test(path)){
            this.setState({bNav:false,bFoot:true})
        }
    }

    componentWillReceiveProps(nextProps){
        console.log('app',nextProps.location.pathname);//监听路由
        let path  = nextProps.location.pathname;
        this.checkPath(path)
    }
    componentDidMount(){
        let path  = this.props.location.pathname;
        this.checkPath(path)
    }
  render(){
      return(
          <div className="App">
              {this.state.bLoading && <Loading2/>}
              {this.state.bNav && <Header/>}

              <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/follow" component={Follows} />
                  <Route path="/color" component={Color} />
                  <Route path="/user" component={User} />
                  <Route path="/login" component={Login} />
                  <Route path="/reg" component={Reg} />
                  <Route path="/detail/:id" component={Detail} />
                  <Redirect exact from="/" to="/home" />
                  <Route component={ErrorPage}/>
              </Switch>

              {this.state.bFoot && <Footer/>}
          </div>
      )
  }
}

export default App;

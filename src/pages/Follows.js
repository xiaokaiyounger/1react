import React,{Component} from 'react'
import Cell from "../components/cell/Cell";
// import styles from '../assets/sass/follows.scss'
import axios from 'axios'

class Follows extends Component{
    state={
        list:[]
    };
    componentDidMount(){
        /*fetch(
            '/mock/follow',


            // params:{_page:1,_limit:11}
        ).then(
            data => data.json()
        ).then(
            res=>this.setState({list:res.page_data})
        )*/
        axios({
           url: 'mock/follow',
            params:{_page:1,_limit:12}
        }).then(
            res=>this.setState({list:res.data.page_data})
        )
    }
    render(){
        return(
            <div className="Follows">
                {
                    this.state.list.map(item=>(
                        <Cell
                            key={item.id}
                            data={item}
                            dataName="home"
                        />
                    ))
                }
            </div>
        )
    }
}

export default Follows
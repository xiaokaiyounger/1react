import React,{Component} from 'react'
import '../assets/sass/detail.css'
import querstring from 'query-string'
//模块化引入jsx前景图片
import fenxiang from '../assets/img/fx.png'
import zan from '../assets/img/zan.png'

import axios from 'axios'

class Detail extends Component{
    state={
        data:{}
    }
    componentDidMount(){
        let {history,location,match} = this.props;
        // console.log(1,match.params.id);
        // console.log(2,querstring.parse(location.search).dataName)
        let id = match.params.id*1;
        let search = querstring.parse(location.search).dataName;

        axios({
            url:`/mock/${search}/${id}`
        }).then(
            res=>
            {
                this.setState({data:res.data.page_data});
                console.log(res.data.page_data)
            }
        )

    }
    render(){
        let {data} = this.state;
        return(
            <div className="Detail">
                <div className="nav">
                    <ul>
                        <li className="l-btn" onClick={()=>this.props.history.go(-1)}></li>
                    </ul>
                </div>
                {
                    data.detail && <div className="content">
                        <div className="header clear"><h2><img src={data.detail.auth_icon} alt=""/></h2><p>{data.detail.auth}</p></div>
                        <div className="cont">
                            <h3>{data.title}</h3>
                            <div className="time"><p>{data.time}<span><img src={zan} alt=""/></span></p></div>
                            <div className="text-box" dangerouslySetInnerHTML={{__html:data.detail.content}}>
                            </div>
                        </div>
                    </div>
                }

                <div className="foot-btn">
                    <ul>
                        <li className="say"><a href="javascript:;">
                            <i></i><span>0</span>
                        </a></li>
                        <li className="zan"><a href="javascript:;">
                            <i></i><span>0</span>
                        </a></li>
                        <li className="xing"><a href="javascript:;">
                            <i><img src="../assets/img/xing.png" alt=""/></i>
                        </a></li>
                        <li className="fx"><a href="javascript:;">
                            <i><img src={fenxiang} alt=""/></i>
                        </a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Detail
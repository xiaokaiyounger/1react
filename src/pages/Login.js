import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import '../assets/sass/login.scss'

class Login extends Component{
    render(){
        return(
            <div className="Login">
                <div className="content">
                    <p className="fhbtn"><a href="javascript:;" onClick={()=>this.props.history.go(-1)}></a></p>
                    <h1></h1>
                    <div className="login-box">
                        <p className="lsolid"></p>
                        <div className="login">
                            <Link to='/login'>登录</Link>
                            {/*<a href="login_m.html">登录</a>*/}
                            <span></span>
                            <Link to='/reg'>注册</Link>

                            {/*<a href="reg_m.html">注册</a>*/}
                        </div>
                        <p className="rsolid"></p>
                    </div>
                    <ul>
                        <li className="lifirst">
                            <input type="text" value=""/>
                            <span>帐号</span>
                        </li>
                        <li>
                            <input type="text" value=""/>
                            <span>密码</span>
                        </li>
                    </ul>
                    <div className="footbox">
                        <input type="button" value="登 录" className="login-btn"/>
                        <a href="javascript:;" className="tishi">忘记密码？</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
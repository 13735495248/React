import React, { Component } from 'react'
import './index.css'
export default class Login extends Component {
    render() {
        /* 通过props获取路由state传参 */
        const {name,psw} = this.props.location.state;
        
        return (
            <div className='login'>
                <h2>登录页面</h2>
                <div>
                    用户名:{name}
                </div>
                <div>
                    密码:{psw}
                </div>
            </div>
        )
    }
}


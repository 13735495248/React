import React, { Component } from 'react';

export default class Home extends Component {
    
    login = () => {
        
        let name = this.nameRef.value;
        let psw = this.pswRef.value;
        if (!name || !psw) {
            alert("用户名,密码不能为空!");
            return;
        }
        /* 路由跳转并传参 */
        this.props.history.push('/login', {
            name,
            psw
        })

    }
    render() {
        return (
            <div className='main'>
                <div>
                    用户名:<input type="text" ref={(c)=>{this.nameRef=c;}} />
                </div>
                <div>
                    密码:<input type="text" ref={(c)=>{this.pswRef=c;}} />
                </div>
                <button onClick={this.login}>登录</button>

            </div>
        )
    }
}

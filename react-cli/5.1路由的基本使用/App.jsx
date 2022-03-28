//创建 "外壳" 组件
import React, { Component } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import { Link, Route } from "react-router-dom"
class App extends Component {
    render() {
        return (
            <div>
                {/* Link:点击跳转到to对应的路由组件 */}
                <Link to="/login">登录</Link>
                <Link to="/register">注册</Link>
                <div>
                    {/* 
                   注册路由:
                     path:路由路径
                     component:路由路径对应的组件
                     注意:
                       路由跳转时,路由注册的组件会在注册的位置显示!
                   */}
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                </div>
            </div>
        )
    }

}
//暴露App组件
export default App
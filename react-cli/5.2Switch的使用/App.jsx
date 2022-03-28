//创建 "外壳" 组件
import React, { Component } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import { Link, Route, Switch } from "react-router-dom"
class App extends Component {
    render() {
        return (
            <div>
                {/* Link:点击跳转到to对应的路由组件 */}
                <Link to="/login">登录</Link>
                <Link to="/register">注册</Link>
                <div>
                    {/* 
                    Switch组件:
                     将路径和组件进行一一对应,某个路径匹配到一个组件
                     就不再继续往下匹配
                    如何使用:
                       用Switch标签给Route路由包裹起来即可
                    */}
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/register" component={Register}></Route>
                        <Route path="/register" component={Register}></Route>
                    </Switch>

                </div>
            </div>
        )
    }

}
//暴露App组件
export default App
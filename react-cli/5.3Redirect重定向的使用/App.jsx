//创建 "外壳" 组件
import React, { Component } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import { Route, Switch,Redirect } from "react-router-dom"
class App extends Component {
    render() {
        return (
                <div>
                    <Switch>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/register" component={Register}></Route>
                        {/* 当路径没有设置匹配组件时,默认重定向到 /login 对应的组件 */}
                        <Redirect to="/home"></Redirect>
                    </Switch>
                </div>
        )
    }

}
//暴露App组件
export default App
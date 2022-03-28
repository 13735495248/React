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
                <div>
                    <Switch>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/register" component={Register}></Route>
                        {/* 
                        第一次进入页面重定向到路径 /login/list,该路径
                        对应的是登录下的list组件
                        */}
                        <Redirect to="/home"></Redirect>
                    </Switch>

                </div>
            </div>
        )
    }

}
//暴露App组件
export default App
//创建 "外壳" 组件
import React, { Component } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import { Link, Route, Switch } from "react-router-dom"
class App extends Component {
    render() {
        return (
            <div>
                {/* 路由链接传递参数 */}
                <Link to="/login/刘备/123456">登录</Link>
                <Link to="/register">注册</Link>
                <div>
                    {/* 
                    注册路由声明参数变量
                    */}
                    <Switch>
                        <Route path="/login/:name/:psw" component={Login}></Route>
                        <Route path="/register" component={Register}></Route>
                    </Switch>

                </div>
            </div>
        )
    }

}
//暴露App组件
export default App
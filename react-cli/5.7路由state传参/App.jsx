//创建 "外壳" 组件
import React, { Component } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import { Link, Route, Switch } from "react-router-dom"
class App extends Component {
    render() {
        return (
            <div>
                {/* 
                state传参:
                  to的值是一个对象,对象有两个属性:
                    pathname:要跳转的路径
                    state:参数对象
                */}
                <Link to={
                    {
                        pathname: '/login', state: {
                            name: '刘备',
                            psw: '123456'
                        }
                    }
                }>登录</Link>
                <Link to="/register">注册</Link>
                <div>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/register" component={Register}></Route>
                    </Switch>

                </div>
            </div>
        )
    }

}
//暴露App组件
export default App
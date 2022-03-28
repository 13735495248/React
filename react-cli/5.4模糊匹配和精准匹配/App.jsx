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
                <Link to="/login/a/b/c">登录</Link>
                <Link to="/register">注册</Link>
                <div>
                    {/* 
                      模糊匹配:
                        当要跳转的路径包含已经注册的路由的路径,点击仍然会跳转,
                        我们称这个匹配为模糊匹配. 

                        例如:点击登录要去 /login/a/b/c这个
                        路径对应的组件,需要去路由里面匹配路径,发现路由里面有个路径
                        /login,因为跳转路径/login/a/b/c包含/login,因此点击登录
                        仍会跳到/login对应的登录组件

                        精准匹配:(不常用,可能会引发问题!)
                          跳转路径必须和路由注册的路径一模一样才能跳转
                          如何开启精准匹配?
                            在Route标签中添加属性 exact 即可开启
                            开启精准匹配后,点击/login/a/b/c匹配不到对应的路由路径,
                            不会发生跳转
                    */}
                    <Switch>
                        <Route exact path="/login" component={Login}></Route>
                        <Route path="/register" component={Register}></Route>
                    </Switch>

                </div>
            </div>
        )
    }

}
//暴露App组件
export default App
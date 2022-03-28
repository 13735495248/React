import React, { Component } from 'react'
import './index.css'
import List from "./List"
import News from "./News"
import { Link, Switch, Route } from "react-router-dom"
export default class Login extends Component {
    render() {
        return (
            <div className='login'>
                <h2>登录页面</h2>
                <div>
                    <Link to='/login/list'>列表</Link>
                    <Link to='/login/news'>新闻</Link>
                </div>
                <div>
                    <Switch>
                        <Route path='/login/list' component={List}></Route>
                        <Route path='/login/news' component={News}></Route>
                    </Switch>

                </div>
            </div>
        )
    }
}


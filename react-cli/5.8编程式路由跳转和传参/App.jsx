//创建 "外壳" 组件
import React, { Component } from 'react'
import Login from './components/Login'
import Home from './components/Home'
import './App.css'
import {Route, Switch,Redirect } from "react-router-dom"
class App extends Component {
    
    render() {
        return (
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/login" component={Login}></Route>
                <Redirect to="/home"></Redirect>
            </Switch>
        )
    }

}
export default App
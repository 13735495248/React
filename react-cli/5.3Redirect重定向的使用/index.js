//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
//引入App组件
import App from './App'
import { BrowserRouter } from "react-router-dom"
/* 
用路由器标签BrowserRouter包裹根组件,即让路由器管理整个应用的页面
*/
ReactDOM.render(
    <BrowserRouter><App/></BrowserRouter>,
    document.getElementById('root'))

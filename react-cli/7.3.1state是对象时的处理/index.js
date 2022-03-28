//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
//引入App组件
import App from './App'
import store from './redux/store'
ReactDOM.render(<App/>,document.getElementById('root'))
//redux数据变化去渲染页面 否则页面不更新
store.subscribe(()=>{
//渲染App到页面
ReactDOM.render(<App/>,document.getElementById('root'))
})

  



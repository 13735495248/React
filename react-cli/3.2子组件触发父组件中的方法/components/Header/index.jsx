import React,{Component} from "react"
import './index.css'
export default class Header extends Component{
    render(){
        /* 
        获取父传过来的属性send,send的值是一个函数,
        点击按钮时执行send方法
        */
        const {send} = this.props;
        return(
            <div className="header">
              <button onClick={send}>触发父组件方法</button>
            </div>
        )
    }
}
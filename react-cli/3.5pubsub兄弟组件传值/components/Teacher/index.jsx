import React,{Component} from "react"
import './index.css'
import pubsub from 'pubsub-js'
export default class Teacher extends Component{
    state = {
        score:99
    }
    send = ()=>{
        let {score} = this.state;
        pubsub.publish('score',score)
    }
    
    render(){
        const {score} = this.state;
        return(
            <div className="teacher">
              <h2>老师组件</h2>
              <div>学生分数:{score}</div>
              <button onClick={this.send}>发送分数给学生</button>
            </div>
        )
    }
}
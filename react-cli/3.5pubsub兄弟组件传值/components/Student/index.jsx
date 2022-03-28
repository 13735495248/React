import React,{Component} from "react"
import './index.css'
import pubsub from 'pubsub-js'
export default class Student extends Component{
    state = {
        score:0
    }
    componentDidMount() {
      pubsub.subscribe('score',(_,data)=>{
          this.setState({
              score:data
          
          })
      })
    }
    
    render(){
        let {score} = this.state;
        return(
            <div className="student">
              <h2>学生组件</h2>
              <div>分数:{score}</div>
            </div>
        )
    }
}
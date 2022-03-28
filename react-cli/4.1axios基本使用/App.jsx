//创建 "外壳" 组件
import {Component} from 'react'
import axios from 'axios'
class App extends Component{
    state={
        text:''
    }
    sendReq = ()=>{
        axios.get('http://127.0.0.1:3000/text').then(res=>{
            this.setState({
                text:res.data
            })
        })
    }
    
    componentDidMount() {
        /* 
        如果第一次进入页面就要获取数据,需要将请求写在该生命周期钩子中
        */
        axios.get('http://127.0.0.1:3000/text').then(res=>{
            this.setState({
                text:res.data
            })
        })
    }
    
    render(){
        let {text} = this.state;
        return (
            <div>
               <div>随机文本:{text}</div>
               <button onClick={this.sendReq}>发送get请求</button>
            </div>
        )
    }

}
//暴露App组件
export default App
//创建 "外壳" 组件
import React,{Component} from 'react'
import Hello from './components/Hello'
class App extends Component{
    state = {
        show:true
    }
    change = ()=>{
        let {show} = this.state;
        //将show取反
        this.setState({
            show:!show
        })
    }
    render(){
        let {show} = this.state;
        return (
            <div>
               <Hello show={show}></Hello>
               <button onClick={this.change}>显示/隐藏组件</button>
            </div>
        )
    }

}
//暴露App组件
export default App
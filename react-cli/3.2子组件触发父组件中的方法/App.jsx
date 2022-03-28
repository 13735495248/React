//创建 "外壳" 组件
import React,{Component} from 'react'
import Header from "./components/Header"
class App extends Component{
    foo = ()=>{
      console.log('子组件触发了父组件的foo方法');
    }
    render(){
        /* 父给子传递了一个箭头函数 */
        return (
            <div>
               <Header send={this.foo}></Header>
            </div>
        )
    }

}
//暴露App组件
export default App
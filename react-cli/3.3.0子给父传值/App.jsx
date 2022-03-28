//创建 "外壳" 组件
import React,{Component} from 'react'
import Header from "./components/Header"
class App extends Component{
    foo = (data)=>{
      console.log('获取到了子传给父的值:',data);
    }
    render(){
        /* 父给子传递一个自定义的属性send,值是一个函数 */
        return (
            <div>
               <Header send={this.foo}></Header>
            </div>
        )
    }

}
//暴露App组件
export default App
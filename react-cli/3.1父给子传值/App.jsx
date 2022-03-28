//创建 "外壳" 组件
import React,{Component} from 'react'
import Header from "./components/Header"
class App extends Component{
    render(){
        /* 在组件标签上设置属性title的值,组件内部通过props对象获取title值 */
        return (
            <div>
               <Header title="首页"></Header>
            </div>
        )
    }

}
//暴露App组件
export default App
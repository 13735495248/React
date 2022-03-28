//创建 "外壳" 组件
import React,{Component} from 'react'
import Add from "./components/Add"
class App extends Component{
    render(){
        return (
            <div>
               <Add></Add>
            </div>
        )
    }

}
//暴露App组件
export default App
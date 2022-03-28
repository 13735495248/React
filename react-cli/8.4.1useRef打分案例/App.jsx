//创建 "外壳" 组件
import React,{Component} from 'react'
import Myinput from "./components/Myinput"
class App extends Component{
    render(){
        return (
            <div>
               <Myinput></Myinput>
            </div>
        )
    }

}
//暴露App组件
export default App
//创建 "外壳" 组件
import React,{Component} from 'react'
import Mc from "./components/Myinput"
class App extends Component{
    render(){
        return (
            <div>
               <Mc></Mc>
            </div>
        )
    }

}
//暴露App组件
export default App
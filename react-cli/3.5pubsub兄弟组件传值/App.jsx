//创建 "外壳" 组件
import React,{Component} from 'react'
import Student from "./components/Student"
import Teacher from "./components/Teacher"
class App extends Component{
    render(){
        return (
            <div>
               <Teacher></Teacher>
               <Student></Student>
            </div>
        )
    }

}
//暴露App组件
export default App
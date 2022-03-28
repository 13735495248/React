//创建 "外壳" 组件
import React,{Component} from 'react'
import Teacher from './components/Teacher'
import Student from './components/Student'
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
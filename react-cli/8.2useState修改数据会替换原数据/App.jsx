//创建 "外壳" 组件
import React,{Component} from 'react'
import Person from "./components/Person"
class App extends Component{
    render(){
        return (
            <div>
               <Person></Person>
            </div>
        )
    }

}
//暴露App组件
export default App
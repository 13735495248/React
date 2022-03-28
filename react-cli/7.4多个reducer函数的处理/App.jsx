//创建 "外壳" 组件
import React,{Component} from 'react'

import Num from './components/Num'
import Person from './components/Person'
class App extends Component{
    render(){
        return (
            <div>
               <Num></Num>
               <Person></Person>
            </div>
        )
    }

}
//暴露App组件
export default App
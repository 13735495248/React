//创建 "外壳" 组件
import React,{Component} from 'react'
import Num from './components/Num'
class App extends Component{
   
    render(){
        
        return (
            <div>
               <Num></Num>
            </div>
        )
    }

}
//暴露App组件
export default App
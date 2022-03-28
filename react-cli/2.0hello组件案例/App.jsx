//创建 "外壳" 组件
import {Component} from 'react'
import Hello from './components/Hello'
class App extends Component{
    render(){
        return (
            <div>
               <Hello></Hello> 
            </div>
        )
    }

}
//暴露App组件
export default App
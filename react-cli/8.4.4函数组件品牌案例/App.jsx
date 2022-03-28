//创建 "外壳" 组件
import React,{Component} from 'react'
import Brand from './components/Brand'
class App extends Component{
    render(){
        return (
            <div>
               <Brand></Brand>
            </div>
        )
    }

}
//暴露App组件
export default App
//创建 "外壳" 组件
import React,{Component} from 'react'
import Segment from "./components/Segment"
class App extends Component{
    foo = (index)=>{
      console.log('点击的索引是:',index);
    }
    render(){
        /* 父传子属性:list 子传父回调函数:select */
        return (
            <div>
               <Segment select={this.foo} list={['订阅','推荐','精选']}></Segment>
            </div>
        )
    }

}
//暴露App组件
export default App
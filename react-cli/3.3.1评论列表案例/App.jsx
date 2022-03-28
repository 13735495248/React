//创建 "外壳" 组件
import React,{Component} from 'react'
import Comments from "./components/Comments"
class App extends Component{
    state = {
        list:[]
    }
    foo = (list)=>{
      this.setState({
          list
      })
    }
    render(){
        let {list} = this.state;
        return (
            <div>
               <Comments send={this.foo}></Comments>
               <ul>
                   {
                     list.map(item=>{
                       return <li>评论之人:{item.name},评论内容:{item.content}</li>
                     })
                   }
               </ul>
            </div>
        )
    }

}
//暴露App组件
export default App
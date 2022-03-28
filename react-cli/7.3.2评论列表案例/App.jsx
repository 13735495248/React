//创建 "外壳" 组件
import React,{Component} from 'react'
import Comments from './components/Comments'
import store from './redux/store'
class App extends Component{
   
    render(){
        let {list} = store.getState();
        return (
            <div>
               <Comments></Comments>
               <ul>
                {
                    list.map(item=>{
                        return (
                            <li>
                                评论人:{item.name},评论内容:{item.content}
                            </li>
                        )
                    })
                }
               </ul>
               
            </div>
        )
    }

}
//暴露App组件
export default App
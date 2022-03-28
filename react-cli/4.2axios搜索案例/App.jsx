//创建 "外壳" 组件
import {Component} from 'react'
import axios from 'axios'
class App extends Component{
    state={
        list:[]
    }
    searchReq = ()=>{
        axios.get('http://127.0.0.1:3000/search',{
            params:{
                keywords:this.myinput.value
            }
        }).then(res=>{
            console.log(res);
            this.setState({
                list:res.data
            })
        })
    }
    
    componentDidMount() {
        
    }
    
    render(){
        let {list} = this.state;
        return (
            <div>
               <input type="text" ref={(c)=>{this.myinput=c}} />
               <button onClick={this.searchReq}>搜索</button>
               {
                   list.map(item=>{
                       return (
                           <div key={item.name}>
                               姓名:{item.name},样貌:{item.lookslike}
                           </div>
                       )
                   })
               }
            </div>
        )
    }

}
//暴露App组件
export default App
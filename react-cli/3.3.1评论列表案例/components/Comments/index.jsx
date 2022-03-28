import React,{Component} from "react"
import './index.css'
export default class Header extends Component{
    state = {
        list:[]
    }
    //发表评论
    commit = ()=>{
        let {send} = this.props;
        let {list} = this.state;
        let name = this.nameref.value;
        let content = this.contentref.value;
        //如果评论人和评论内容不存在,直接return
        if(!name||!content)return;
        list.push({name,content});
        //执行父组件的send事件并传参数list
        send(list);
    }
    
    render(){
        return(
            <div className="comments">
              <div>
                  评论之人: <input ref={(c)=>{this.nameref=c;}} type="text" />
              </div>
              <div>
                  评论内容: <input ref={(c)=>{this.contentref=c;}} type="text" />
              </div>
              <button onClick={this.commit}>发表评论</button>
            </div>
        )
    }
}
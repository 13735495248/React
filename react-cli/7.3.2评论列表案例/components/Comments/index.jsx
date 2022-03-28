import React, { Component } from 'react'
import './index.css'
import store from '../../redux/store'
export default class Comments extends Component {
  commit = ()=>{
    let {dispatch} = store;
    let name = this.nameRef.value;
    let content = this.contentRef.value;
    if(!name||!content)return;
    dispatch({type:'add_comment',data:{name,content}})

  }
  render() {
    return (
      <div className='comments'>
        <div>
            评论之人: <input ref={(c)=>{this.nameRef=c;}} type="text" />
        </div>
        <div>
            评论内容: <input ref={(c)=>{this.contentRef=c;}} type="text" />
        </div>
        <button onClick={this.commit}>发表评论</button>
      </div>
    )
  }
}

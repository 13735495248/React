import React from 'react'
import "./index.css"
import { Button } from 'antd'
/* 引入antd样式 */
import "antd/dist/antd.css"
import {useRef} from 'react'

export default function Add(props) {
  //根据flag显示隐藏组件
  const {flag,add} = props;
  //定义输入框ref
  const eventRef = useRef();
  //点击增加的事件
  function addmsg(){
    //如果输入框没内容,直接return 
    if(!eventRef.current.value)return;
    //触发父组件中的add函数并将输入框内容作为参数传递过去
    add(eventRef.current.value);
    //清空输入框
    eventRef.current.value = '';
  };
  if(flag){
    return (
        <div className='add'>
            <input 
            ref={eventRef} 
            placeholder='请输入待办事项' />
            <Button 
            type='primary' 
            onClick={addmsg}>增加</Button>
        </div>
      )
  
  }else{
      return null;
  }
  
}

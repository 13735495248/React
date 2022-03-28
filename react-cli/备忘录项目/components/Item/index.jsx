import React from 'react'
import "./index.css"
import { Button } from 'antd'
/* 引入antd样式 */
import "antd/dist/antd.css"
import './index.css'
export default function Item(props) {
  const {item,lookMsg,modiMsg,deleMsg,index} = props;
  return (
    <div>
        <div className='item'>
            <div 
            style={{textDecoration:item.complete?'line-through':'none'}}
            className='content'>
              {item.content}
            </div>
            <div className='btns'>
              <Button type='primary' onClick={()=>{lookMsg(item)}}>查看</Button>
              <Button onClick={()=>{modiMsg(item,index)}}>编辑</Button>
              <Button onClick={()=>{deleMsg(index)}} danger>删除</Button>
            </div>
            
        </div>
    </div>
  )
}

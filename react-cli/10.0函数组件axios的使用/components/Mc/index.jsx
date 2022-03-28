import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
export default function Mc() {
    const [text,setText] = useState('');
    /* 
    函数组件中,数据请求要放到useEffect中
    注意:
      这里useEffect的第二个参数一定要传空数组,这样它类似
      componentDidMount钩子函数,只在初次渲染组件执行一次
     */
    useEffect(()=>{
      axios.get('http://127.0.0.1:3000/text').then(res=>{
          setText(res.data);
      })
    },[])
    function foo(){
        axios.get('http://127.0.0.1:3000/text').then(res=>{
          setText(res.data);
      })
    }
    return (
        <div>
            <div>随机文本:{text}</div>
            <button onClick={foo}>获取随机文本</button>
        </div>
    )
}

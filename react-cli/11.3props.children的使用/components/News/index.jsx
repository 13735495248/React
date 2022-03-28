import React from 'react';
import './index.css'
export default function News(props) {
    /* 
    props.children可以获取到组件标签对之间的元素
    我们在父组件中插入props.children就可以将父组件
    标签体中的元素插入到相应位置并显示出来,类似vue中的slot插槽
    */
  return (
      <div className='news'>
        <h2>我是News组件</h2>
        {
        props.children
        }
      </div>
  )
}

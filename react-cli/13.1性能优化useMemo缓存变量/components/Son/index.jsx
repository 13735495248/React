import React from 'react'
import './index.css'
import {memo} from 'react'
export default memo(function Son(props) {
  console.log('子组件函数执行了');
  const {name,age} = props.person;
  return (
    <div className='parent'>
       <h3>子组件</h3>
       <div>
         姓名:{name},年龄:{age}
       </div>
    </div>
  )
})

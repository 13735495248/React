import React from 'react'
import './index.css'
import {memo} from 'react'
/* memo是一个函数,将函数组件作参数传给memo,即可缓存组件 */
export default memo(function Son(props) {
  console.log('子组件函数执行了');
  return (
    <div className='parent'>
       <h3>子组件</h3>
    </div>
  )
})

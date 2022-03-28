import React from 'react'
import { createContext } from 'react'
import './index.css'
import Son from '../Son'
/* 创建并暴露上下文对象 */
export const ParentCtx = createContext();
export default function Parent() {
  return (
    <div className='parent'>
      <h2>父组件</h2>
      <ParentCtx.Provider value={{name:'刘备',age:18}}>
          <Son></Son>
      </ParentCtx.Provider>
    </div>
  )
}

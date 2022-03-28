import React from 'react'
import { useContext } from 'react'
import {ParentCtx} from '../Parent'
import './index.css'
import Sun from '../Sun'
export default function Son() {
  const {name,age} = useContext(ParentCtx);
  return (
    <div className='son'>
     <h2>子组件</h2>
     <div>姓名:{name}</div>
     <div>年龄:{age}</div>
     <Sun></Sun>
    </div>
  )
}

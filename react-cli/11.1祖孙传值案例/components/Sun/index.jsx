import React from 'react'
import { useContext } from 'react'
import {ParentCtx} from '../Parent'
import './index.css'
export default function Sun() {
  const {name,age} = useContext(ParentCtx);
  return (
    <div className='sun'>
     <h2>孙组件</h2>
     <div>姓名:{name}</div>
     <div>年龄:{age}</div>
    </div>
  )
}

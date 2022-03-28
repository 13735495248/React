import React from 'react'
import {RootCtx} from '../../App.jsx'
import { useContext } from 'react';
import './index.css'
export default function Son() {
  const {name,age} = useContext(RootCtx);
  return (
      <div className='son'>
        <h3>子组件</h3>
        姓名:{name},年龄:{age}
      </div>
  )
}

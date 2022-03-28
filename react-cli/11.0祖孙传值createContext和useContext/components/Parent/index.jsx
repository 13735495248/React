import React from 'react'
import {RootCtx} from '../../App.jsx'
import { useContext } from 'react';
import './index.css'
export default function Parent() {
  const {name,age} = useContext(RootCtx);
  return (
      <div className='parent'>
        <h3>父组件</h3>
        姓名:{name},年龄:{age}
      </div>
  )
}

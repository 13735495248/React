import React from 'react'
import './index.css'
import { GlobalDataCtx } from '../GlobalData'
import { useContext } from 'react'
export default function Teacher() {
  const {state,dispatch} = useContext(GlobalDataCtx);
  function add(){
      dispatch({type:'add'})
  }
  return (
    <div className='teacher'>
      <h3>老师组件</h3>
      <div>老师姓名:{state.teacher_name}</div>
      <button onClick={add}>分数加1</button>
    </div>
  )
}

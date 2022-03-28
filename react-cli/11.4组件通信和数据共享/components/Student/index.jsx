import React from 'react'
import './index.css'
import { GlobalDataCtx } from '../GlobalData'
import { useContext } from 'react'
export default function Student() {
  const {state,dispatch} = useContext(GlobalDataCtx);
  function add(){
      dispatch({type:'add'})
  }
  return (
    <div className='student'>
      <h3>学生组件</h3>
      <div>学生姓名:{state.student_name}</div>
      <button>学生分数:{state.score}</button>
    </div>
  )
}

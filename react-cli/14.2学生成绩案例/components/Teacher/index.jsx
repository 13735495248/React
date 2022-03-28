import React from 'react'
import {observer} from 'mobx-react'
import { scoreState } from '../../store'
import './index.css'
export default observer(function Teacher() {
  const {score,add} = scoreState;
  return (
    <div className='teacher'>
      <h3>老师组件</h3>
      <div>学生成绩:{score}</div>
      <button onClick={add}>修改成绩</button>
    </div>
  )
})

import React from 'react'
import {observer} from 'mobx-react'
import { scoreState } from '../../store'
import './index.css'
export default observer(function Student() {
  const {score,add} = scoreState;
  return (
    <div className='student'>
      <h3>学生组件</h3>
      <div>学生成绩:{score}</div>
    </div>
  )
})

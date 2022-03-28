import React from 'react'
import "./index.css"
import addimg from '../../static/add.png'
export default function MyHeader(props) {
  const {title,change} = props;
  return (
    <div className='myheader'>
        {title}
        <img onClick={change} src={addimg} alt=''/>
    </div>
  )
}

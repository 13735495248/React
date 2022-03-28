import React, { useRef } from 'react'
import './index.css'
export default function Myinput() {
    //
    let myref = useRef();
    function getInput(){
      console.log(myref.current.value);
    }
    return (
        <div>
            <input ref={myref} type="text" />
            <button onClick={getInput}>获取输入框内容</button>
        </div>
    )
}
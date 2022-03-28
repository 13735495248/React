import React, { useState } from 'react'
import './index.css'
export default function Add() {
    /* 
    
    */
    const [a,setA] = useState(1);
    function addA(){
        /* 
        useState修改数据的第二种写法:
        setXXX参数是一个回调函数:
          回调函数的参数就是我们的状态值,该回调需要
          return一个修改后的状态值

        注意:
          该写法适用于更新数据依赖于之前状态数据的场景
         */
        setA((a)=>{
            return a+1;
        });
    }
    
    return (
        <div>
            <div>
                数字:{a}
            </div>
            <button onClick={addA}>增加1</button>

        </div>
    )
}
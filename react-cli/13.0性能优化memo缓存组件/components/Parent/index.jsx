import React from 'react'
import Son from '../Son'
import { useState, useMemo } from 'react'
import './index.css'
export default function Parent() {
    const [num, setNum] = useState(0);
    function add() {
        /* 
        每次点击按钮修改父组件中的数字,子组件没变化,
        我们期望的是只渲染父组件函数,但是子组件也重新渲染了!
        
        解决方法:
        使用memo缓存子组件
         */
        setNum(num + 1);
    }
    
    return (
        <div className='parent'>
            <h3>父组件</h3>
            <div>数字:{num}</div>
            <button onClick={add}>数字加1</button>
            <Son></Son>
        </div>
    )
}

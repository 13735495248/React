import React from 'react'
import Son from '../Son'
import { useState, useMemo } from 'react'
import './index.css'
export default function Parent() {
    const [num, setNum] = useState(0);
    function add() {
        setNum(num + 1);
    }

    /* 
    点击按钮修改num,每次Parent都会重新渲染执行,person变量每次
    都会重新生成,Son的props每次都会变化,一变化Son自然会重新渲染执行,
    有什么办法点击按钮让person地址不变,即缓存person,不用每次都重新创建

    解决方法:
    使用useMemo缓存变量!
    */

    /* 
    useMemo是一个函数,有两个参数:
    第一个参数:是一个回调函数,返回值是需要缓存的数据
    第二个参数:依赖数据组,当依赖的数据变化,回调函数才会返回新的变量,
    如果你的数据不依赖其他数据变化,依赖数组传个空数组即可.
    */
    const person = useMemo(() => {
        console.log('useMemo回调执行了,生成了person');
        return {
            name: '刘备',
            age: 18
        }
    }, [])
    return (
        <div className='parent'>
            <h3>父组件</h3>
            <div>数字:{num}</div>
            <button onClick={add}>数字加1</button>
            <Son person={person}></Son>
        </div>
    )
}

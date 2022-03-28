import React from 'react'
import Son from '../Son'
import { useState, useMemo,useCallback } from 'react'
import './index.css'
export default function Parent() {
    const [num, setNum] = useState(0);
    function add() {
        setNum(num + 1);
    }

    const person = useMemo(() => {
        console.log('useMemo回调执行了,生成了person');
        return {
            name: '刘备',
            age: 18
        }
    }, []);

    /* 
    useCallback用来缓存函数,作用和useMemo类似,useCallback是
    一个函数,有两个参数:
      第一个参数:要缓存的函数
      第二个参数:依赖数组
     */
    const foo = useCallback(()=>{

    },[]); 
    
    return (
        <div className='parent'>
            <h3>父组件</h3>
            <div>数字:{num}</div>
            <button onClick={add}>数字加1</button>
            <Son person={person} send={foo}></Son>
        </div>
    )
}

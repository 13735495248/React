import React, { useRef,useState } from 'react'
import './index.css'
export default function Mc() {
    /* 
    useRef是一个函数,可以用来创建一个对象保存数据,返回值是一个对象
    注意:
    1.useRef返回的对象在组件内只会初始化一次,即函数组件更新不会重新创建对象
    覆盖原对象
    2.修改useRef对象不会触发函数组件更新渲染
    */
    const num = useRef(0);
    function add(){
        num.current++;
        console.log('num:',num);
    }
    const [a,setA] = useState(0);
    return (
        <div>
            <div>数字:{num.current}</div>
            <button onClick={add}>增加1</button>
            <button onClick={()=>{setA({})}}>点击触发函数组件更新</button>
        </div>
    )
}
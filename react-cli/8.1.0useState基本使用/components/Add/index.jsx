import React, { useState } from 'react'
import './index.css'
export default function Add() {
    /* 
    useState是一个函数,用来声明一个状态变量,它可以传一个参数作为变量的默认值,
    useState执行后返回值是一个数组,数组有两个元素:
      第一个:是一个变量,默认值就是useState的实参1,
      第二个:是一个函数,作用是修改第一个变量的值
    
    注意:
      1.组件中如果有多个状态,使用多次useState定义状态变量即可
      2.setX方法是异步的,修改了数据不能立刻获取到,需要等下一次
      更新完数据状态,才能获取到数据.
    */
    const [a,setA] = useState(1);
    const [b,setB] = useState(1);
    function addA(){
        setA(a+1);
        //因为setA是异步的,所以第一次打印a是1
        //console.log(a);
    }
    function addB(){
        setB(b+2);
    }
    return (
        <div>
            <div>
                数字a:{a}
            </div>
            <div>
                数字b:{b}
            </div>
            <div>
                a,b的和:{a+b}
            </div>
            <button onClick={addA}>a增加1</button>
            <button onClick={addB}>b增加2</button>
        </div>
    )
}
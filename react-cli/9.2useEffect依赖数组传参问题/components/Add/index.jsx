import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
export default function Add() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  function addA() {
    setA(a + 1);
  }
  function addB() {
    setB(b + 2);
  }
  /* 
  useEffect第二个参数是一个依赖数组,当依赖的数据变化,就会触发
  useEffect的回调函数,该参数传值存在三种情况:
    1.不传:任意数据变化都会触发回调函数;
    2.传空数组[]:回调函数只在组件挂载时执行一次,以后任何数据
    变化都不会执行,相当于componentDidMount钩子函数
    3.传依赖数据,如[a]:回调函数在数据a变化时会触发,
    相当于componentDidUpdate钩子函数
  */

  //1.不传第二个参数的情况
  useEffect(() => {
    console.log('不传第二个参数的情况');
    console.log('a1:', a);
    console.log('b1:', b);
  });

  //2.第二个参数传空数组的情况
  useEffect(() => {
    console.log('第二个参数传空数组的情况');
    console.log('a2:', a);
    console.log('b2:', b);
  }, []);

  //3.第二个参数传依赖数据的数组
  useEffect(()=>{
    console.log('第二个参数传依赖数据的数组');
    console.log('a3:',a);
    console.log('b3:',b);
  },[a]);
  return (
    <div>
      <div>
        数字a:{a}
      </div>
      <div>
        数字b:{b}
      </div>
      <button onClick={addA}>a增加1</button>
      <button onClick={addB}>b增加2</button>
    </div>
  )
}
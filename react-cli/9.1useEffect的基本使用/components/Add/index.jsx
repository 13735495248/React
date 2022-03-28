import React, { useState, useEffect } from 'react'
import './index.css'
import ReactDOM from 'react-dom'
export default function Add() {
  const [a, setA] = useState(1);
  function addA() {
    setA(a + 1);
    /* 
    setA是异步的,我们想立刻打印出变化之后的a值是做不到的,
    打印出的a仍然是变化之前的值1.
    怎么解决这个问题呢?
      可以在useEffect中打印a,useEffect会在数据状态更新完
      执行,因此打印出的a是变化后的2
    */
    console.log(a);
  }

  function unmount() {
    /* 卸载组件 */
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  /* 
  useEffect的作用:
    函数式组件没有状态state,useState给其提供了状态;
    函数式组件没有生命周期,useEffect给其提供了类似于生命周期的回调函数
  */
  useEffect(() => {
    /* 
    该回调函数可以理解成componentDidMount和componentDidUpdate的合成函数
    什么时候触发该函数?
      1.组件挂载到页面会触发一次
      2.组件依赖的数据变化会触发
    */
    console.log('a:', a);
    return () => {
      /* 
      该返回函数主要为了清除一些副作用,如取消订阅,关闭定时器等,如果
      不需要清除副作用,就无需返回了.类似componentWillUnmount钩子函数
      什么时候触发该函数?
        1.执行当前 effect 之前对上一个 effect 进行清除
        2.卸载组件的时候触发
      */
      console.log('触发了清除函数');

    }
  });
  return (
    <div>
      <div>
        数字a:{a}
      </div>
      <button onClick={addA}>a增加1</button>
      <button onClick={unmount}>卸载组件</button>
    </div>
  )
}
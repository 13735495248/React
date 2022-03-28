import React, { useReducer } from 'react'
import './index.css'
export default function Add() {
    /* 
    useReducer和useState的作用类似,都是用来处理数据的,但是
    useReducer可以对数据进行更加多样,复杂的处理
    useReducer本质就是一个函数,有两个参数:
      第一个参数:
        reducer函数
      第二个参数:
        状态默认值

    useReducer返回值是一个数组,数组有两个元素:
      第一个元素:
        状态数据
      第二个元素:
        dispatch函数,触发action对应的行为
    */
    const [num,dispatch] = useReducer((state,action)=>{
        switch (action.type) {
            case 'add':
                return state+1;
            case 'sub':
                return state-1;
            default:
                return state;
        }
    },0);
    
    return (
        <div>
            <div>
                数字num:{num}
            </div>
            <button onClick={()=>{dispatch({type:'add'})}}>num增加1</button>
            <button onClick={()=>{dispatch({type:'sub'})}}>num减少1</button>
        </div>
    )
}
import React from 'react'
import './index.css'
export default function Add() {
    console.log('执行了add函数');
    let a = 1;
    let b = 1;
    function addA(){
        /*
        点击按钮,我们发现a确实增加了1,但是页面始终不更新,这是什么原因呢?
        想要页面更新在类式组件里面必须重新触发render方法更新虚拟dom;
        在函数式组件中必须重新执行函数组件,函数返回的虚拟dom才会重新更新渲染.
        我们打印发现,Add函数的log:console.log('执行了add函数') 始终只执行了一次,
        也就意味着函数组件只渲染了一次页面,更新数据页面不重新渲染,自然页面数据不会变化!
        有什么办法可以在更新数据的时候,也一起更新页面呢?答案是hook函数useState;
        */
        a++;
        console.log('a:',a);
    }
    function addB(){
        b++;
        console.log('b:',b);
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
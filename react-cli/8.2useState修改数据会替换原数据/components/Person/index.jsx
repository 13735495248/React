import React, { useState } from 'react'
import './index.css'
export default function Add() {
    const [person,setPerson] = useState({
        name:'刘备',
        age:18
    }) 
    function modi(){
        /* 
        注意:
          useState里的修改函数setX和类式组件里面的setState修改方式不一样:
            setState是合并原数据
            setX是替换原数据

        因此修改后的person为{name:'关羽'},age丢失了为undefined,
        页面上age显示为空白

        如果你仍然想保留原数据而不是替换原数据,可以使用扩展运算符,
        代码如下:
          setPerson({
            ...person,
            name:'关羽'
          })
        上面代码的意思是拷贝原person属性,并将name修改为关羽
        */
        setPerson({
            name:'关羽'
        })
        
    }
    return (
        <div>
           <div>
               姓名:{person.name}
           </div>
           <div>
               年龄:{person.age}
           </div>
           <button onClick={modi}>修改姓名</button>
        </div>
    )
}
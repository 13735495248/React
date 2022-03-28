import React from 'react'
import {useState} from 'react'
import produce from 'immer'
export default function Mc() {
  const [person,setPerson] = useState({
      name:'刘备',
      age:18
  })
  let {name,age} = person;
  function modiAge(){
      /* 
        修改age,数据确实变化了,但是页面始终不更新,这是怎么回事?
        react监听数据变化,当监听到useState数据变化重新执行函数,
        更新页面,当数据是基本类型时,
        不会存在问题;但是,当数据是对象和数组时,直接将修改后的对象作为
        setPerson的参数时,页面不会更新!Why?

        因为react监听的是数组和对象的地址变化,修改对象和数组中的内容,
        并不会改变它们的地址,因此如果想修改对象后页面更新,可以拷贝
        原对象内容生成一个新对象,并将拷贝的新对象替换原对象,这样地址就会变化,
        react就能监听到,页面就会更新!也可以使用不可变对象库immer.js将修改好
        的新对象传给setPerson作参数.这里用到了函数式编程数据不可变的思想.
      */

      /* 方法1:对象浅拷贝,拷贝完修改属性 */
      //setPerson({...person,age:age+1});

      /* 方法2:使用不可变对象库immer.js */
      setPerson(produce(person,(draft)=>{
        draft.age++
      }));
  }
  return (
    <div>
        <div>
          姓名:{name},年龄:{age}
        </div>
        <button onClick={modiAge}>修改年龄</button>
    </div>
  )
}

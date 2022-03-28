import React from 'react'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { nanoid } from 'nanoid'
export default function Mc() {
  const [list, setList] = useState([]);
  const timerId = useRef(null);
  useEffect(() => {
    axios.get('http://127.0.0.1:3000/search', {
      params: {
        keywords: ''
      }
    }).then(res => {
      setList([...res.data]);
    })
  }, [])

  function change(e) {
    debounce(() => {
      searchReq(e.target.value)
    }, 500);

  }

  /* 
  防抖函数:
    就是指触发事件后,在 n 秒内函数只能执行一次,
    如果触发事件后在 n 秒内又触发了事件,则会重新计算函数延执行时间

    举个例子,坐电梯的时候,如果电梯检测到有人进来（触发事件）,
    就会多等待 10 秒,此时如果又有人进来（10秒之内重复触发事件）,
    那么电梯就会再多等待 10 秒.
    在上述例子中,电梯在检测到有人进入 10 秒钟之后，才会关闭电梯门开始运行，
    因此，“函数防抖”的关键在于，在 一个事件 发生 一定时间 之后，才执行 特定动作

    防抖函数作用:
      防止函数多次触发,造成性能问题
  */
  function debounce(callback, time) {
      //如果延时器存在,删除延时器
      if (timerId.current) {
        clearTimeout(timerId.current)
        timerId.current = null;
      }
      //创建延时器
      timerId.current = setTimeout(() => {
        //延时器延时结束后执行特定事件,并删除延时器
        clearTimeout(timerId.current);
        timerId.current = null;
        //执行事件
        callback();
      }, time);
    


  }

  function searchReq(keywords) {
    axios.get('http://127.0.0.1:3000/search', {
      params: {
        keywords: keywords
      }
    }).then(res => {
      setList([...res.data]);
    })
  }
  return (
    <div>
      <input onChange={change} type="text" />
      {
        list.map(item => {
          return (
            <div key={nanoid()}>
              姓名:{item.name},样貌:{item.lookslike}
            </div>
          )
        })
      }
    </div>
  )
}

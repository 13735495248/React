//创建 "外壳" 组件
import React from 'react'
import MyHeader from './components/MyHeader'
import Add from "./components/Add"
import Item from './components/Item'
import {useState,useRef} from 'react'
import {Modal} from 'antd'
import {getTime} from './utils/getTime.js'
import produce from 'immer'
function App(){
    //定义添加的显示隐藏状态
    const [flag,setFlag] = useState(false);
    //从本地localstorage获取事件列表默认值
    let localList = localStorage.getItem('list');
    if(localList){
       //如果本地有待办事件列表,parse成json对象
       localList = JSON.parse(localList);
    }else{
      //如果本地待办事件为空,初始化空数组
      localList = [];
    }
    //定义事件待办列表
    const [list,setList] = useState(localList);
    //定义编辑的dom
    const contentRef = useRef();
    //定义选中的dom
    const checkRef = useRef();
    //添加待办事件
    function add(content){
      //如果输入内容为空,直接return
      if(content.length === 0)return;
      //定义待办事项对象
      let obj = {
        id:+new Date(),
        content:content,
        complete:false
      }
      //添加待办事件
      setList([...list,obj]);
      //将列表数据存到本地
      localStorage.setItem('list',JSON.stringify([...list,obj]));
    };
    //查看
    function look(item){
      //时间戳转时间
      let mytime = getTime(item.id);
      Modal.info({
        title: '查看',
        okText:'确定',
        content: (
          <div>
            <ul>
              <li>时间:{mytime}</li>
              <li>内容:{item.content}</li>
              <li>完成状态:{item.complete?'已完成':'未完成'}</li>
            </ul>
          </div>
        ),
        onOk() {},
      });
    };

    //编辑
    function modi(item,index){
      //时间戳转时间
      let mytime = getTime(item.id);
      Modal.confirm({
        title: '编辑',
        okText:'修改',
        cancelText:'取消',
        content: (
          <div>
              <div>时间:{mytime}</div> 
              <div>
                <textarea 
                defaultValue={item.content} 
                ref={contentRef}>
                </textarea>
              </div>
              <div className='des'>
                <span>完成状态:</span> 
                <input type="checkbox" ref={checkRef} defaultChecked={item.complete} />
              </div>
          </div>
        ),
        onOk() {
          const newAry = produce(list,draft=>{
            draft[index].content = contentRef.current.value;
            draft[index].complete = checkRef.current.checked;
          })
          localStorage.setItem('list',JSON.stringify(newAry));
          setList(newAry);
        },
      });
    };
    //删除
    function dele(index){
      Modal.confirm({
        title: '删除',
        okText:'确定',
        cancelText:'取消',
        content: (
          <div>
            确定要删除该事项吗?
          </div>
        ),
        onOk() {
          //删除事项
          const newAry = produce(list,draft=>{
            draft.splice(index,1);
          });
          setList(newAry);
          //修改本地数据
          localStorage.setItem('list',JSON.stringify(newAry));
        },
      });

    }
    return(
        <div>
          <MyHeader title={'待办事项'} change={()=>{setFlag(!flag)}}>
          </MyHeader>
          <Add flag={flag} add={add}></Add>
          {
            list.map((item,index)=>{
              return <Item 
              key={item.id} 
              lookMsg={look}
              modiMsg={modi}
              deleMsg={dele}
              index={index}
              item={item}></Item>
            })
          }
        </div>
    )
}
//暴露App组件
export default App
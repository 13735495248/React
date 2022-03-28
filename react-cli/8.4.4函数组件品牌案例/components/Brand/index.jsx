import React from 'react'
import './index.css'
import { useState, useRef } from 'react'
import produce from 'immer'
export default function Brand() {
    const idRef = useRef();
    const nameRef = useRef();
    const [state, setState] = useState({
        list: [
            { id: 1, name: '宝马' },
            { id: 2, name: '奔驰' },
            { id: 3, name: '大众' }
        ],
        changeList: [
            { id: 1, name: '宝马' },
            { id: 2, name: '奔驰' },
            { id: 3, name: '大众' }
        ]
    })

    //添加品牌函数
    function add() {
        let id = idRef.current.value;
        let name = nameRef.current.value;
        /* id或者name为空直接return */
        if (!id || !name) return;

        /* 判断id或者品牌名字是否已经存在 */
        let isBrandExist = state.list.find(item => {
            return item.id == id || item.name == name;
        });
        /* 如果id或者品牌名已经存在,alert弹窗提醒 */
        if (isBrandExist) {
            alert('该品牌或id已经存在!');
            return;
        } else {
            /* 给list和changeList里面添加一个新的品牌对象 */

            /* 方法1 */
            setState(produce(state, draft => {
                draft.list.push({ id, name });
                draft.changeList.push({ id, name });
            }));

            /* 方法2 */
            //   setState({
            //       list:[...state.list,{id,name}],
            //       changeList:[...state.changeList,{id,name}]
            //   })
        }

    }

    //删除品牌函数
    function dele(index) {
        /* 方法1 */
        setState(produce(state, draft => {
            draft.list.splice(index, 1);
            draft.changeList.splice(index, 1);
        }));

        /* 方法2 */
        // let list = [...state.list];
        // list.splice(index,1);
        // let changeList = [...state.list];
        // changeList.splice(index,1);
        // setState({list,changeList});
    }

    //监听搜索框变化
    function change(e) {
        /* 方法1 */
        setState(produce(state, draft => {
            draft.changeList = draft.list.filter(item => {
                return item.name.includes(e.target.value)
            })
        }));

        /* 方法2 */
        // let list = [...state.list];
        // let changeList = list.filter(item => {
        //     return item.name.includes(e.target.value)
        // })
        // setState({
        //     ...state,
        //     changeList
        // })
    }
    return (
        <div>
            id: <input ref={idRef} type="text" />
            name: <input ref={nameRef} type="text" />
            <button onClick={add}>添加</button>
            请输入要搜索的品牌:
            <input onChange={change} type="text" />

            <div className='menu'>
                <div>id</div>
                <div>name</div>
                <div>操作</div>
            </div>
            {
                state.changeList.map((item, index) => {
                    return (
                        <div key={item.id} className='list'>
                            <div>{item.id}</div>
                            <div>{item.name}</div>
                            <div
                                onClick={() => { dele(index) }}
                                style={{ 'color': 'blue' }}>删除</div>
                        </div>
                    )
                })
            }

        </div>
    )
}

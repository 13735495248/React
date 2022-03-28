import React from 'react'
import { useReducer } from 'react'
import produce from "immer"
export default function Mc() {
    const [state, dispatch] = useReducer((state, action) => {
        const { type } = action;
        switch (type) {
            /* 
            注意:
              这里一定要用对象拷贝或者immer返回一个新对象,不能直接返回state,
              否则页面会不更新,这里也用到了函数式编程数据不可变的思想.
            */

            /* 写法1: */
            // case 'modi_age':
            //     return { ...state, age: state.age + 1 };
            // default:
            //     return { ...state };

            /* 写法2: */
            case 'modi_age':
                return produce(state,draft=>{
                    draft.age++;
                });
            default:
                return produce(state);
        }
    }, { name: '刘备', age: 18 });

    function add() {
        dispatch({ type: 'modi_age' })
    }
    return (
        <div>
            <div>
                姓名:{state.name}
            </div>
            <div>
                年龄:{state.age}
            </div>
            <button onClick={add}>年龄增加1</button>

        </div>
    )
}

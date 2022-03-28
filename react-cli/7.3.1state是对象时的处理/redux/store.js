import { createStore } from 'redux'
import produce from 'immer'
let p = { name: '刘备', age: 18 }
function personReducer(state = p, action) {
    const { type, data } = action;
    /* 
    注意:
    1.return会替换原state对象而不是合并原state对象
    2.redux使用了函数式编程思想,对象不允许修改,因此我们不能直接
    修改state的属性然后返回,如下面的写法是错误的:
      switch (type) {
        case 'modi_name':{
            state.name = data;
            return state;
        }
        case 'modi_age':{
            state.age = age;
            return state;
        }
        default:
            return state;
    }
    
    */

    //方法1:我们可以使用对象浅拷贝,拷贝完修改属性,生成一个新的对象
    // switch (type) {
    //     case 'modi_name':
    //         return { ...state, name: data };
    //     case 'modi_age':
    //         return { ...state, age: data };
    //     default:
    //         return { ...state };
    // }

    //方法2:使用immer.js不可变对象库
    switch (type) {
        case 'modi_name':
            return produce(state,draft=>{draft.name=data;});
        case 'modi_age':
            return produce(state,draft=>{draft.age=data;});
        default:
            return produce(state,draft=>{});
    }
}
export default createStore(personReducer);
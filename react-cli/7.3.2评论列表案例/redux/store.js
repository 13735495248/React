import { createStore } from 'redux'
import produce from 'immer'
let p = {list:[]}
function commentsReducer(state = p, action) {
    const { type, data } = action;

    //方法1:我们可以使用对象浅拷贝,拷贝完修改属性,生成一个新的对象
    // switch (type) {
    //     case 'add_comment':
    //         return {list:[...state.list,data]};
    //     default:
    //         return { ...state };
    // }

    //方法2:使用immer.js不可变对象库,return 一个新对象
    switch (type) {
        case 'add_comment':
            return produce(state,(draft)=>{draft.list.push(data)});
        default:
            return produce(state);
    }
}
export default createStore(commentsReducer);
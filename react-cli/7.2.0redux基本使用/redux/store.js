import { createStore } from 'redux'
/* 
state:状态数据(可以是基本数据类型和引用数据类型)
action是一个对象,是dispatch方法传的参数,包含两个属性:
  type:事件名
  data:事件要传递的参数
 */
function numReducer(state=0, action) {
    const { type, data } = action;
    /* 
    type是事件名
    data是事件传递的参数
    return 返回的是处理过的state数据
     */
    switch (type) {
        case 'add':
            return state + data;
        case 'sub':
            return state - data;
        default:
           return state;
    }
}
/* 
createStore函数会返回一个对象,对象有下面几个重要属性:
  dispatch: ƒ dispatch(action)
  getState: ƒ getState()
  subscribe: ƒ subscribe(listener)

  dispatch:触发事件,参数是action对象({type:事件名,data:参数})
  getState:获取state数据
  subscribe:监听state变化
 */
//let store = createStore(numReducer);

export default createStore(numReducer);
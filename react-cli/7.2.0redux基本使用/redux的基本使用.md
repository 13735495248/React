## redux的基本使用
0.引入redux
npm i redux

1.创建一个store.js文件,文件里面存redux的数据和逻辑

2.在index.js中import引入store,并订阅store更新,当监听到store
更新时,在回调中重新渲染App组件
store.subscribe(()=>{
//渲染App到页面
ReactDOM.render(<App/>,document.getElementById('root'))
});

3.在组件中使用数据
先import引入store
触发事件:
   store.dispatch({type:'事件名',data:参数});
获取数据:
   store.getState()
  
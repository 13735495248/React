import React, { Component } from 'react'
import produce from 'immer'
export default class Hello extends Component {
  state = {
    name:'刘备',
    nickName:'刘皇叔',
    info:{
      age:18,
      time:'三国',
      ability:{
        attack:70,
        defense:70
      }
    }
  }

  add = ()=>{
    // let {info} = this.state;
    /* 
    修改年龄把time和brother也修改了,怎么解决这个问题?
    */
    // this.setState({
    //   info:{
    //     age:info.age+1
    //   }
    // });

    /* 
    方法一:利用setState传空对象不修改数据只更新页面的特性,
    将修改age的方法写在setState外面
    */
    //  info.age++;
    //  this.setState({});

     /* 
     方法二:利用es6的对象扩展加赋值修改
     */
      // this.setState((state)=>{
      //   return {
      //     info:{
      //       ...state.info,
      //       age:state.info.age+1
      //     }
      //   }
      // })

      /* 
      方法三:使用不可变对象库immer.js
      */
       let nextState = produce(this.state,(draftState)=>{
         draftState.info.age++;
       });
       this.setState(nextState);

       /* 思考:攻击力加1如何修改 */


  }

  modiAttack = ()=>{
    /* 方法一 */
    // this.state.info.ability.attack++;
    // this.setState({})

    /* 方法二 */
    // this.setState((state)=>{
    //   return {
    //     ...state,
    //     info:{
    //       ...state.info,
    //       ablity:{
    //         ...state.info.ability,
    //         attack:state.info.ability.attack++
    //       }
    //     }
    //   }
    // });

    /* 方法三 */
    let nextState = produce(this.state,(draftState)=>{
      draftState.info.ability.attack++;
    });
    this.setState(nextState);

  }
  render() {
    let {name,nickName,info} = this.state;
    return (
      <div>
        <div>姓名:{name}</div>
        <div>昵称:{nickName}</div>
        <div>年龄:{info.age}</div>
        <div>生活的时代:{info.time}</div>
        <div>攻击力:{info.ability.attack}</div>
        <div>防御力:{info.ability.defense}</div>
        <button onClick={()=>{this.add()}}>修改年龄</button>
        <button onClick={()=>{this.modiAttack()}}>修改攻击力</button>
      </div>
    )
  }
}

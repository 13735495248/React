import React, { Component } from 'react';
import store from '../../redux/store'
export default class Person extends Component {
    /* 修改姓名 */
    modi_name = ()=>{
        store.dispatch({type:'modi_name',data:'关羽'})
    }
    modi_age = ()=>{
        store.dispatch({type:'modi_age',data:99});
    }
    render(){
        const {name,age} = store.getState();
        return (
            <div>
                <div>姓名:{name}</div>
                <div>年龄:{age}</div>
                <button onClick={this.modi_name}>修改姓名</button>
                <button onClick={this.modi_age}>修改年龄</button>
            </div>
        )
    }
}

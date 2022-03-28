import React, { Component } from 'react'
import store from '../../redux/store'
import './index.css'
export default class Num extends Component {
    add = () => {
      const {dispatch} = store;
      dispatch({type:"add_num"});
    }
    render() {
        const { num } = store.getState();
        return (
            <div className='num'>
                <h3>数字组件</h3>
                <div>数字:{num}</div>
                <button onClick={this.add}>数字加1</button>
            </div>
        )
    }
}

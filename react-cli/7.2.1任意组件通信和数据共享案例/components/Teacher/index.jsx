import React, { Component } from 'react'
import './index.css'
import store from '../../redux/store'
export default class Teacher extends Component {
    modi = () => {
        let { dispatch } = store;
        dispatch({ type: 'add' })
    }
    render() {
        return (
            <div className='teacher'>
                <h3>老师组件</h3>
                <button onClick={this.modi}>修改分数</button>
            </div>
        )
    }
}

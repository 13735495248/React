import React, { Component } from 'react'
import './index.css'
import store from '../../redux/store'
export default class Student extends Component {
    render() {
        let { getState } = store;
        return (
            <div className='student'>
                <h3>学生组件</h3>
                <div>学生分数:{getState()}</div>

            </div>
        )
    }
}

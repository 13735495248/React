import React, { Component } from 'react';
import store from '../../redux/store'
export default class Num extends Component {
    //数字增加
    add = () => {
        let { dispatch } = store;
        /* dispatch触发事件add,参数是2 */
        dispatch({ type: 'add', data: 2 })
    }
    //数字减少
    sub = () => {
        let { dispatch } = store;
        /* dispatch触发事件sub,参数是1 */
        dispatch({ type: 'sub', data: 1 })
    }
    render() {
        let { getState } = store;
        return (
            <div>
                <div>
                    数字:{getState()}
                </div>
                <button onClick={this.add}>加法</button>
                <button onClick={this.sub}>减法</button>

            </div>
        )
    }
}

import React, { Component } from 'react'
/*
1.npm引入antd:npm i antd
2.引入需要的组件 
*/
import {Button} from 'antd'
/* 3.引入antd样式 */
import "antd/dist/antd.css"
import './index.css'
export default class Hello extends Component {
    render() {
        return (
            <div className='Hello'>
                <Button type='primary'>按钮</Button>
            </div>
        )
    }
}


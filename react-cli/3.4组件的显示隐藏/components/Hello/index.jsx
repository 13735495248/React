import React, { Component } from 'react'
import './index.css'
export default class Hello extends Component {
    
    render() {
        const {show} = this.props;
        //show存在显示组件
        if(show){
            return (
                <div className='Hello'>
                    <div className='title'>hello react</div>
                </div>
            )
        }else{
            //show不存在隐藏组件
            return null;
        }
        
    }
}


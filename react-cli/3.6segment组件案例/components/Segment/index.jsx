import React, { Component } from "react"
import './index.css'
export default class Segment extends Component {
    state = {
        selectIndex:0
    }
    clickmsg=(index)=>{
      const { select } = this.props;
      //通过执行父组件回调函数select传参index给父组件
      select(index);
      //设置selectIndex为当前点击的按钮索引
      this.setState({
          selectIndex:index
      })
    }
    render() {
        const { list } = this.props;
        const {selectIndex} = this.state;
        return (
            <div className="segment">
                {
                    list.map((item, index) => {
                        return <div 
                        onClick={()=>{this.clickmsg(index)}}
                        key={item} 
                        className={selectIndex===index?'default select':'default'}>
                        {item}
                        </div>
                    })
                }
            </div>
        )
    }
}
import React, { Component } from 'react'
import { nanoid } from 'nanoid'
export default class Mc extends Component {
  state = {
    list: [
      { name: '刘备', select: false },
      { name: '关羽', select: false },
      { name: '张飞', select: false },
    ],
    //是否全部选中
    isAllSelect: false
  }
  //添加方法
  add = () => {
    //获取输入框name的值
    let name = this.nameRef.value;
    if (!name) return;
    //列表中添加一个名字
    this.state.list.push({ name, select: false });
    this.setState({});
  }

  //删除的方法
  dele = (index) => {
    this.state.list.splice(index, 1);
    this.setState({});
  }

  //点击列表的方法
  change = (item) => {
    let { list } = this.state;
    //点击列表,给选中状态select取反
    item.select = !item.select;
    //判断是否全选
    let flag = list.filter(item => item.select === true).length === list.length;
    this.setState({
      isAllSelect: flag
    });
  }

  //点击全选(全不选)的方法
  allChange = (e) => {
    //获取是否全选的状态,以及列表
    let { isAllSelect, list } = this.state;
    /* 
    根据isAllSelect,设置list所有元素全选或者全不选
    注意:
      这里的isAllSelect状态应该是改变之后的状态,即取反之后的状态
    */
    list.forEach(item => { item.select = !isAllSelect; })
    this.setState({
      isAllSelect: !isAllSelect
    });
  }

  render() {
    /* 
    注意:
      尽量不要在render里面写太多逻辑代码,会影响性能
    */
    let { list, isAllSelect } = this.state;
    return (
      <div>
        <div>
          <input ref={(c) => { this.nameRef = c; }} placeholder='请输入姓名' type="text" />
          <button onClick={this.add}>添加</button>
          {
            list.map((item, index) => {
              return (
                <div key={nanoid()}>
                  <input
                    checked={item.select}
                    onChange={() => { this.change(item) }} type="checkBox" />
                  {item.name}
                  <button onClick={() => { this.dele(index) }}>删除</button>
                </div>
              )
            })
          }
          <div>
            <input onChange={this.allChange} checked={isAllSelect} type="checkBox" />
            当前选中{list.filter(item => item.select === true).length}个/全部{list.length}个
          </div>
        </div>
      </div>
    )
  }
}

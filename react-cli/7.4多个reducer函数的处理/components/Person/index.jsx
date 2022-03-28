import React, { Component } from 'react'
import store from '../../redux/store'
import './index.css'
export default class Person extends Component {
  render() {
    let {person} = store.getState();
    return (
      <div className='person'>
          <h3>人组件</h3>
          <div>姓名:{person.name}</div>
          <div>年龄:{person.age}</div>
      </div>
    )
  }
}

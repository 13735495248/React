import React, { Component } from 'react';
import {Link} from 'react-router-dom'
export default class Home extends Component {
  render() {
    return (
        <div>
            <Link to="/login">登录</Link>
            <Link to="/register">注册</Link>
        </div>
    )
  }
}

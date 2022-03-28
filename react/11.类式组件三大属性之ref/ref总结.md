## 获取真实dom的三种方式
1.字符串形式的ref
  定义:ref="myref"
  获取dom:this.refs.myref

2.回调形式的ref
  定义:ref={(c)=>{this.myinput=c}}
  获取dom:this.myinput
3.createRef形式的ref
  定义:myinput = React.createRef()
      ref={this.myinput}
  获取dom:this.myinput.current
## mobx介绍
mobx是和vuex,redux类似的状态管理工具,一般用于react项目中,相比于redux,
mobx使用起来更加简单,mobx使用面向对象思想设计的,因此,不用像学习redux一样,
还需要学习函数式编程思想

mobx的作者是Michel Weststrate,和immer.js是同一个作者
作者github:https://github.com/mweststrate

## mobx的使用
1.引入:npm i mobx mobx-react
2.创建store.js文件存储数据:
  2.1引入makeAutoObservable将组件实例上的属性变为可监听的
  import { makeAutoObservable } from 'mobx'

  2.2创建一个状态类
  class NumState {
    constructor() {
        /* 
        将实例对象上面的所有属性和方法设置为可监听的
        */
        makeAutoObservable(this);
    }
    num = 0;
    //这里一定要写成箭头函数,否则this可能会丢失
    add = () => {
        this.num++;
    }
    }

    2.3导出状态类的实例
    export const numState = new NumState();

3.使用
  3.1在组件中引入需要使用的mobx状态类的实例
  import {numState} from '../../store'
  3.2在组件中引入observer
  import {observer} from 'mobx-react'
  3.3使用observer函数包裹组件,在组件数据变化时,自动更新渲染组件
4.解构赋值使用属性和方法
  const { num, add } = numState;




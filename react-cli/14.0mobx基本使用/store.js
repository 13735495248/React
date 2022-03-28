import { makeAutoObservable,observable,action,computed } from 'mobx'
class NumState {
    constructor() {
        /* 
        makeAutoObservable将实例对象上面的所有属性和方法设置为可监听的:
          第一个参数:必须填写,不能省略,组件实例this
          第二个参数:是一个对象,定义可监听的属性observable,方法action,计算属性computed
          注意:
            第二个参数可以省略,如果省略的话属性会自动定义为observable,方法定义为action,
            get方法定义为computed
        */

        /* 完整写法 */
        // makeAutoObservable(this,{
        //   num:observable,
        //   action:action,
        //   len:computed
        // });

        /* 省略第二个参数的写法 */
        makeAutoObservable(this);
    }
    //定义属性
    num = 0;
    //这里一定要写成箭头函数,否则this可能会丢失
    add=()=>{
        this.num++;
    }
    //计算属性
    get len(){
        return this.num+10;
    }
}
export const numState = new NumState();
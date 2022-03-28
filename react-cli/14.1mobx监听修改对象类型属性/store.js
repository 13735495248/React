import { makeAutoObservable } from 'mobx'
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

class PersonState{
    constructor(){
        makeAutoObservable(this)
    }
    person = {
        name:'刘备',
        age:18
    }
    modi_age = ()=>{
        this.person.age++;
    }
}
export const numState = new NumState();
export const personState = new PersonState();
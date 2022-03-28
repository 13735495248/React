import { makeAutoObservable } from 'mobx'
class ScoreState {
    constructor() {
        /* 
        将实例对象上面的所有属性和方法设置为可监听的
        */
        makeAutoObservable(this);
    }
    score = 57;
    //这里一定要写成箭头函数,否则this可能会丢失
    add = () => {
        this.score++;
    }
}

export const scoreState = new ScoreState();
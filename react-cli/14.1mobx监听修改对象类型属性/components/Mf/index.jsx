import React from 'react'
import { observer } from 'mobx-react'
import {personState} from '../../store'
/* observer监听组件中数据变化,一旦发生变化重新渲染组件 */
export default observer(function Mf() {
    const { person,modi_age } = personState;
    function modi(){
        /* 
        当监听的属性是对象时,直接修改或者通过方法修改都可以,
        建议使用方法修改,这样和我们的vuex就非常相似,便于记忆
        */

        /* 方法1:直接修改 */
        //person.age++;
        /* 方法2:通过实例的方法修改 */
        modi_age();
    }
    return (
        <div>
            <div>
                姓名:{person.name}
            </div>
            <div>
                年龄:{person.age}
            </div>
            <button onClick={modi}>修改年龄</button>
        </div>
    )
})

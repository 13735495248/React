import React,{Component} from 'react'
import { observer } from 'mobx-react'
import {numState} from '../../store'
/* observer监听组件中数据变化,一旦发生变化重新渲染组件 */
export default observer(class Mc extends Component {
    render(){
        const {num,add} = numState;
        return (
            <div>
                <div>
                    数字:{num}
                </div>
                <button onClick={add}>修改数字</button>
            </div>
        )

    }
    
})

//创建 "外壳" 组件
import React,{createContext} from 'react'
import Parent from './components/Parent'
import Son from './components/Son'
/* 创建并暴露上下文组件,默认值是0 */
export const RootCtx = createContext(0);
function App(){
    
        return (
               <RootCtx.Provider value={ {name:'刘备',age:'18'} }>
                 <Parent></Parent>
                 <Son></Son>
               </RootCtx.Provider>
        )

}
//暴露App组件
export default App
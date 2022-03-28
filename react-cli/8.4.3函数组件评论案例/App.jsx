//创建 "外壳" 组件
import React, { useState } from 'react'
import Comments from './components/Comments'
import {nanoid} from 'nanoid'
function App() {
    const [list,setList] = useState([]);
    function foo(list) {
      setList(list);
    }
    return (
        <div>
            <Comments send={foo}></Comments>
            {
                list.map(item=>{
                    return (
                        <div key={nanoid()}>
                            评论人:{item.name},评论内容:{item.content}
                        </div>
                    )
                })
            }
        </div>
    )

}
//暴露App组件
export default App
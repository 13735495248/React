import React, { useRef,useState} from 'react'
import './index.css'
export default function Comments(props) {
    const nameRef = useRef();
    const contentRef = useRef();
    const [list,setList] = useState([]);
    const { send } = props;
    //发表评论
    function commit() {
        let name = nameRef.current.value;
        let content = contentRef.current.value;
        if (!name || !content) return;
        //触发父组件send事件并传参
        send([...list,{name,content}]);
        //修改list的值,使得每次触发函数组件时都是最新的list
        setList([...list,{name,content}])
    }
    return (
        <div className='comments'>
            <div>
                评论之人: <input ref={nameRef} type="text" />
            </div>
            <div>
                评论内容: <input ref={contentRef} type="text" />
            </div>
            <button onClick={commit}>发表评论</button>
        </div>
    )
}

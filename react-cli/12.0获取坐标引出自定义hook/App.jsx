import React from 'react'
import { useEffect,useState } from 'react'
export default function App() {
  function clickmsg(e){
    setPoint({x:e.pageX,y:e.pageY})
  }
  const [point,setPoint] = useState({x:0,y:0});
  useEffect(()=>{
    document.addEventListener('click',clickmsg);
    return ()=>{
        document.removeEventListener('click');
    }
  },[]);
  return (
    <div>
      <div>x:{point.x}</div>
      <div>y:{point.y}</div>
    </div>
  )
}

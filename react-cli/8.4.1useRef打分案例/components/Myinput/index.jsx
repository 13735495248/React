import React, { useRef,useState } from 'react'
import './index.css'
export default function Myinput() {
    //观众分数
    const score = useRef(0);
    //评委分数
    const [score1,setScore1] = useState(0)
    function addScore(){
        score.current++;
    }
    function addScore1(){
        setScore1(score1+1)
    }
    return (
        <div>
            <div>观众分:{score.current}---评委分:{score1}</div>
            <button onClick={addScore}>观众打分</button>
            <button onClick={addScore1}>评委打分</button>
        </div>
    )
}
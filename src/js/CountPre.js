import React, {useState,useEffect} from "react";

function TimerCount(){
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const updateCount = () => {
        setCount(count - 1);
    }
    const Counts = () => {
        setCount(0);
    }
    return(
        <div>
            <p> 숫자 : {count}</p>
            <button onClick={increment}>
                증가
            </button>
            <button onClick={updateCount}>
                감소
            </button>
            <button onClick={Counts}>
                초기화
            </button>
        </div>
    )
}
export default TimerCount;
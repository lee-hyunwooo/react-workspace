import React, {useState} from 'react';
//증가시키는 함수

function Addcount() {
    //useState를 활용해서 값 증가하는 함수를 완성할 것
    const[count, setCount] = useState(0)

    const cc = () => {
        setC(c-1);
    }

    const[c,setC] = useState(1)

    const increament = () => {
        setCount(count+1);
    }   



return(
    <div>
        <h1> Count : {count}</h1>
        <button onClick={increament}>증가</button>

        <h1>count : {c}</h1>
        <button onClick={cc}>감소</button>
    </div>
)

}


function Count() {
    return (
      
        <div>
    <Addcount/>
    </div>
    );
}

    


    
export default Count;
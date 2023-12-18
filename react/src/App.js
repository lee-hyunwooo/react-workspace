import React, {useState} from 'react';

//userState : 상태를 관리하기 위해 사용되는 함수
//사용법 : 배열형식으로 사용을 하며, 첫번째 배열은 현재 상태값, 두번째 배열은 상태 업데이틑 하는 값
// const [count, setCount] = useState(0);


//Js에서는 글자값인지 숫자값인지 중요하지 않음
//재사용이 가능한지, 재할당이 가능한지가 중요


//  var : 재할당O 재선언 O /밑에서 안된 error 예제 모두 가능
//  let : 재선언 X 재할당 O
let count = 0;
count = 1;
// let count = 2; 불가
//  const : 재선언X 재할당 X /한번 선언하면 다시 값을 변경하거나 수정할 수 없음

const msg = "hihi";
//msg = "aa"; / msg에 다른 값을 넣고 싶어서 추가로 값을 변경하려하면 error 발생

function HiComponent() {
  return(
    <div>
      <h1>{msg}</h1>
      <p>이것은 Hi 컴포넌트입니다.</p>
    </div>
  )
}

function App() {
  return (
    <div> 
      <h1>안녕 React</h1>
      <h2>{msg}</h2>
      <h2>{count}</h2>
      <HiComponent/>
      <Counter/>
      <p>이것은 React JS입니다.</p>
    </div>
  );
}

export default App; 

//export default : 다른 파일에서 사용할 수 있도록 내보내는 부분, 기본적으로 내보낼 항목을 지정하는 역할을 함
//                  다른 js에서 App.js에 있는 function App을 사용할 수 있도록 내보내기도 하지만 App.js에서 기본으로 사용할 항목을 지정하기도 함

function Counter() {
  //자바스크립트 코드 작성하는 공간
  //[초기값, 변경될 값] = 초기값 설정해주는 공간
  const[count,setCount] = useState(0);

  const increament = () => {
    setCount(count + 1);
  }
  //사용법 : 배열형식으로 사용을 하며, 첫번째 배열은 현재 상태값, 두번째 배열은 상태 업데이틑 하는 값
// const [count, setCount] = useState(0);
 
  return ( //html 태그 코드는 return 안에 작성해줌
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increament}>증가시키는 버튼</button>
    </div>
    //순수자바스크립트 에서는 onclick 작성을 했지만
    //리액트자바스크립트 에서는 onClick C를 대문자로 활용하는 카멜케이스를 사용함
  )
}

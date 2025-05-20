import { useState, useRef } from "react";

/*useRef
 : 컴포넌트의 생명주기 안에서 값을 유지하는 훅으로 새롭게 렌더링이 되더라도 값이 변하지
 않고 유지된다
  useState와 같이 값은 마음대로 변경할 수 있지만, 값의 변경될때 리렌더링은 되지않는다.
  또한 javascript의 getElementById()와 같이 Dom요소에 접근할 때 사용된다. */
function App() {
  //스테이트 생성
  console.log('렌더링됨');
  const [renderer, setrenderer] = useState(0);
  //Ref변수 생성 (값 생성시 리렌더링이 되지 않으므로 함수는 지원하지 않음)
  const countRef = useRef(0);
  //console.log('countRef',countRef);
  const increaseCountState = () => {
    setCount(count +1);
  }
  const increaseCountref = () =>{
    //ref값을 1 증가시킨다.
    countRef.current = countRef.current +1 ;
    /*useref를 통해 생성된 변수는 current라는 key를 가진 객체를 반환하므로 접근시에는
    아래와 같이 '변수명.current'형태로 기술해야한다.*/
    console.log('ref', countRef.current);
  }
  //이거 교안보고 수정해라 준수야
  // return (
  //   <div className="App">
  //     <p>state : {countRef.current}</p>
  //     <p>ref : {countvar}</p>
  //     {/* 버튼을 누를대마다 state가 변경되므로 리랜더링이 된다. */}
  //     <button onClick={dorendering}>렌더링</button>
  //     <button onClick={increaseref}>ref증가</button>
  //     {/* ref의 값이 변경은 되지만 리렌더링은 되지않는다. */}
  //     <button onClick={increasevar}>var증가</button>
  //     <button onClick={printResult}>ref/var출력</button>
  //   </div>
  // )
}

export default App

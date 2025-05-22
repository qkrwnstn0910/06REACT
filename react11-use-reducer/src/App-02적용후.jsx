import { useReducer, useState } from "react";

/*
useReducer
  useState와 유사하게 상태를 관리한다. 단 여러개의 하위값을 가진 스테이트
  를 관리할때 유용하다 또한 컴포넌트에서 상태를 업데이트 하는 로직을
  분리할 수 있다.
  형식]
    Dispatch(Action ==> reducer(prevstate, action)
    디스패치를 통해 리듀서 함수를 실행하고 파라미터로 전달된 액션을 분석
    해서 스테이트를 업데이트한다.) */
    /*
    reducer함수 : 스테이트를 업데이트 하는 역할로 redux의 stre와 유사하다
    매개변수의 첫번째는 현재상태, 두번째는 상태변경을위한 객체를 할당받는다. */
const countReducer = (prevCount, action) => {
  /*/매백변수로 전달된 Action 객체를 분석ㅎ서 스테이트를 변경 후 변환
  한다*/
      if (action.mode ==='up') {
        return prevCount + action.number;
      }
      else if(action.mode ==='down') {
        return prevCount - action.number;
      }
      else if(action.mode ==='reset') {
        return 0;
      }
    }

export default function App() {
  //*usetHook사용
  // 형식[state변수명, disPatch함수] = useReducer(하무명) */
  const [count,countDispatch] = useReducer(countReducer, 0) ;
  //입력상자의 증가치 변경을 위한 스테이트와 함수 정의
  const [number, setNumber] = useState(1);
  //입력상자의 onChange 이벤트 리스너에서 호출
  const changeNumber = (e) =>{
    setNumber(Number(e.target.value));
    //각 버튼을 누르면 디스패치를 통해 리듀서 함수를 호출한다.
    //인수로 전달되는 객체를 Action이라고하고, 이를 분석해서 증가 감소
    //리셋 3가지로 스테이트를 변경한다.
  }
  const down = () => {
    countDispatch({mode : 'down' , number:number});
  }
   const up = () => {
    countDispatch({mode : 'up' , number:number});
  }
   const reset = () => {
    countDispatch({mode : 'reset' , number:number});
  }
  return (
    <div className="App">
      <h2>useReducer 훅 사용하기</h2>
      <div>
        <input type="button" value={"-"} onClick={down}/>
        <input type="button" value={"0"} onClick={reset}/>
        <input type="button" value={"+"} onClick={up}/>
        <input type="number" value={"+"}  onChange={changeNumber} />
        <span>{count}</span>
      </div>
    </div>
  );
    
}

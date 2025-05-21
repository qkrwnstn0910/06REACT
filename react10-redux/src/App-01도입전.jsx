import { useState } from "react";

/*
부모컴포넌트인 App에서 내려받은 프롭스의 함수를 다시 자식 컴포넌트로 전달한다.
이렇게 순차적으로 전달하는것을 프롭스 드릴링이라고 한다. */

const Right1 = (props) => {
  return(
    <div>
      <h2>Right1</h2>
      <Right2 onMyPlus2={()=>{
        props.onMyPlus1();
      }}></Right2>
    </div>
  );
}
const Right2 = (props) => {
  return(
    <div>
      <h2>Right2</h2>
      <Right3 onMyPlus3={()=>{
        props.onMyPlus2();
      }}></Right3>
    </div>
  );
}
const Right3 = (props) => {
  return(
    <div>
      <h2>Right3</h2>
      {/*right의 최하위 컴포넌트에서는 Click이벤트를 통해 부모족에서 전달된
      함수를 호출한다. 그러면 Right3> Right2>Right1>App과 같은 순서로 호출된다. */}
      <input type='button' value={'+'} onClick={() => {
        props.onMyPlus3();
      }}></input>
    </div>
  );
}
/*
Left컴포넌트의 경우에는 스테이트를 하위로 전달한다. */
const Left1 = (props) => {
  return (
    <div>
      <h2>Left1 : {props.number1}</h2>
      <Left2 number2={props.number1}></Left2>
    </div>
  );
}
const Left2= (props) => {
  return (
    <div>
      <h2>Left2 : {props.number2}</h2>
      <Left3 number3={props.number2}></Left3>
    </div>
  );
}
const Left3= (props) => {
  return (
    <div>
      <h2>Left3 : {props.number2}</h2>
    </div>
  );
}
function App() {
  //최상위 컴포넌트에서 스테이트생성
  const [number,setNumber] = useState(1);
  
  return (
      <div className="root">
        {/*스테이트 값 출력 */}
        <h2>리엑트-리덕스 : {number}</h2>
        <div id="grid">
          {/*Left 컴포넌트 하위로는 number 값을 전달 */}
          <Left1 number1={number}></Left1>
          {/*Right컴포넌트 하위로는 스테이트 변경을 위한 함수 전달 */}
          <Right1 onMyPlus1={()=> {
            setNumber(number+1);
          }}></Right1>
        </div>
      </div>
  );
}

export default App

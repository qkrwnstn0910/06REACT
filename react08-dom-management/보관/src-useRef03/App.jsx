import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  //스테이트 생성
  const [count, setCount] = useState();

  /*
  step1 : 렌더링의 횟수를 알고 싶어 이와같이 스테이트로 처리하면 첫번째 렌더링 후 
    useEffect가 실행되고 내부에서 다시 스테이트가 변경되므로 렌더링이 지속적으로 되어
    무한루프에 빠지게된다.
  */
  // const [renderCount, setRenderCount] = useState(1);
  // useEffect(() => {
  //   console.log('렌더링01',renderCount);
  //   setRenderCount(renderCount+1);
  // });
  /*step2 : 만약 이 상황에 일반변수를 사용하면 렌더링될대마다 0으로 초기화 되므로 횟수를
  알 수 없게 된다. 따라서 변화는 감지해야 하지만 렌더링은 안되야하는 상황에 useRef는 유
  용하게 사용된다. */

  const renderCount = useRef(1);
  useEffect(()=> {
    console.log('렌더링2', renderCount.current);
    renderCount.current = renderCount.current+1;
  });
  return (<>
  <div className="App">
    <p>Count : {count}</p>
    <button onClick={() => setCount(count+1)}>카운트증가</button>
  </div>
 </>);
}

export default App

//이거 고치기

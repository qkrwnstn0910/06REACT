import { useState,useMemo } from "react";
const longTimeCalculate = (number) => {
  console.log('시간이 많이 걸리는 계산'); 
  for(let i =0; i<1234567890; i++) {}
  return number + 10000;
}
const simpleCalculate = (number) => {
  console.log('금방 끝나는 계산');  
  return number +1  ;
}

function App() {
  const [longTimeNum, setLongTimeNum] = useState(1);
  const [simpleNumber, setSimpleNumber] = useState(1);
  // step 1 : App컴포넌트가 렌더링되면 아래 2개의 함수를 호출하여 반환된 값으로 설정한다.
  // 매개변수로는 스테이트가 인수로 전달된다. 따라서 렌더링 할때마다 2개의 함수는 모두 실
  // 행되어 성능에 영향을 미치게된다.
  // const longTimeSum = longTimeCalculate(longTimeNum);
  // const simpleSum = simpleCalculate(simpleNumber);

  //step2 : 시간이 많이 걸리는 함수를 호출한 후 반환되는값을 useMemo를 통해 메모이제이션
  //한다. 이값은 longTimeNum이 변경될때만 다시 함수를 호출하므로 short 버튼을 눌렀을때는 실
  //행되지 않는다. 즉 렌더링시 불필요하게 함수가 실행되는것을 차단할 수 있어 성능이 향상된다.
  const longTimeSum = useMemo(()=> {
    return longTimeCalculate(longTimeNum);
  }, [longTimeNum]);
  const simpleSum = simpleCalculate(simpleNumber);

  return (
    <div className="App">
      <h2>long time 계산기</h2> 
      <input type="number" value={longTimeNum}
        onChange={(e)=> setLongTimeNum(parseInt(e.target.value))}/>
      <span> + 10000 = {longTimeSum}</span>

      <h2>short time 계산기</h2>
      <input type="number" value={simpleNumber}
        onChange={(e)=> setSimpleNumber(parseInt(e.target.value))}/>
      <span> + 10000 = {simpleSum}</span>

    </div>
    
  );
}

export default App;

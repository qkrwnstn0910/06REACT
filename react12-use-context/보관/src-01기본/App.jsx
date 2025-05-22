//컴포넌트 임포트
import { useState } from "react"
import { SimpleContext } from "./context/SimpleContext"; 

import CompState1 from './common/CompProps1';
import CompContext1a  from "./common/CompContext1a";
import CompContext1b from "./common/CompContext1b";
export default function App() {
  const [myNumber, setMyNumber] = useState(1);
  return (<>
    <h2>최상위 컴포넌트</h2>
    {/*스테이트로 선언한 myNumber의 값 변경 */}
    <input type="number" value={myNumber} onChange={(e) => {
      setMyNumber(e.target.value);
    }}/>
  {/*하위컴포넌트로 프롭스를 통해 데이터 전달 */}
    <div className="App">
      <h3>프롭스를 통한 데이터전달</h3> 
      <CompState1 propData={'프롭스로 전달하는 데이터'} myNumber = {myNumber}/>
    </div>
    {/*하위 컴포넌트를 프롭스 없이 렌더링 */}
    <div className="App">
      <h3>useContext 적용</h3>
      <CompContext1a/>
    </div>
    {/*컨텍스트 프로바이더를 이용해서 하위 컴포넌트를 랩핑한다. 그러면
    하위 컴포넌트는 포로바이더가 제공하는 데이터를 공유할 수 있다/
    이 부분은 리덕스와 유사한 방식이다/ */}
    <SimpleContext.Provider value={{str:'Provider의 초기값', num:myNumber}}>
      <div className="App">
        <h3>useContext 적용 및 Provider 래핑</h3>
        <CompContext1b/>
      </div>
    </SimpleContext.Provider>
   </>   
  );
}
//이거 오류뜨는거 이유 찾기


import { useState } from "react";
import { ThemeContext } from './context/ThemeContext';
//모듈화된 컴포넌트 임포트
import Page from "./context/Page";
//App컴포넌트가 전달해준 프롭스를 하위 컴포넌트로 전달

/*const Footer = ({isDark, setIsDark}) => {
  const toggleTheme = () => {
    setIsDark(!isDark);
  }
  return (
    <div className="footer"
    style={{
      backgroundColor : isDark ? 'black' : 'lightgray'
    }} 
  ><input type="button" value={"Dark Mode"} className="button"
    onClick={toggleTheme}></input>
    </div>
  );
}*/

function App() {
  //다크모드 변경을 위한 스테이트
  const [isDark, setIsDark] = useState(false);
  /*데이터 공유를 위한 프로바이더는 2개이상 겹처서 래핑 할 수있다. */
  return (<>
  {/* 자식 컴포넌트로 스테이트 변수와 세터함수를 전달 */}
  {/*simplecontext를 써보자 교안봐라 준수야 귀찬네 대충 해보고 지피티에 검색해봐
  프로바이더는 중첩 적용이 된단다.*/}
  <ThemeContext.Provider value={{isDark, setIsDark}}>
    <div className="App">
      <Page></Page>
    </div>
  </ThemeContext.Provider>
  </>);
}

export default App;

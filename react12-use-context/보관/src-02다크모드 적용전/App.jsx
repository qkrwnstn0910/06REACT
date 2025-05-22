import { useState } from "react";

//App컴포넌트가 전달해준 프롭스를 하위 컴포넌트로 전달
const Page = ({isDark, setIsDark}) => {
  return (
    <div className="page">
      <Header isDark={isDark}></Header> 
      <Content isDark={isDark}></Content> 
      <Footer isDark={isDark} setIsDark={setIsDark}></Footer> 
    </div>
  );
}
const Header = ({isDark}) => {
  return (
    <header className="header"
      style={{
        backgroundColor : isDark ? 'black' : 'lightgray',
        color : isDark ? 'white' : 'black'
      }}
      ><h1>Welcome형딜동...</h1>  
    </header>
  );
}

const Content = ({isDark}) => {
  return (
    <div className="content" 
    style={{
      backgroundColor : isDark ? 'black' : 'lightgray',
      color : isDark ? 'white' : 'black'
    }} ><p>형딩동 반가워 ㅋㅋ...</p></div>
  );
}

const Footer = ({isDark, setIsDark}) => {
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
}

function App() {
  //다크모드 변경을 위한 스테이트
  const [isDark, setIsDark] = useState(false);
  return (<>
  {/* 자식 컴포넌트로 스테이트 변수와 세터함수를 전달 */}
    <div className="App">
      <Page isDark = {isDark} setIsDark={setIsDark}></Page>
    </div>
  </>);
}

export default App;

/**
컴포넌트는 일반적인 javascript 함수와 같이 생성한다. 단 return문에 삽입된
컨텐츠가 엔더링되므로 필수로 작성해야한다.
 */
function myBody() {

  return (<>
  <h2>React - 기본</h2>
    <ol>
      <li>프론트엔드</li>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript</li>
        <li>jQuery</li>
      </ul>
      <li>백엔드</li>
      <ul>
        <li>자바</li>
        <li>오라클</li>
        <li>Jsp</li>
        <li>Spring boot</li>
      </ul>
    </ol>
    </>
  );
}
function App() {
  return (
    <div className="App">
      <h2>React - 컴포넌트 만들기</h2>  
      {/**컴포넌트 삽입시에는 html채그와 같이 기술하면 된다. 단 반드시 닫는
       태그가 있어야한다.*/}
      <myBody></myBody>
       {/**쌍으로 작성하지 않는다면 아래와 같이 self-closing형식으로
       작성할 수 있다.*/}
    </div>
  );
}

export default App

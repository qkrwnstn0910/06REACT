/* JSX에서 스타일을 적용하는 방법
   : JSX에서는 HTML과 조금 다른 방식으로 스타일을 적용한다.
   -class속성은 className으로 변경한다. JS에서 이미 예약어로 사용하고
   있기 때문이다.
   -id속성은 그대로 사용할 수 있다
   -style속성을 통해 인라인 방식을 사용할때는 컬리브레이스(콧수염괄호)
   로 Json 객체의 값을 부여해야한다. */

function App() {
  //json객체로 스타일 정의
  const mystyle = {
    color: "white",
    backgroundColor : "DodgerBlue",
    padding : "10px",
    fontFamily: "Verdena"
  };
   return (
    <div className="App">
      <h2>React 스타일 지정하기</h2>  
      <ol>
        {/* 스타일 속성을 인라인 방식으로 부여할때는 컬리브레이스를 
        사용한다. */}
        <li style={{color:"red"}}>프론트엔드</li>
        {/**객체로 정의한 속성을 부여함 */}
        <ul style={mystyle}>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>JQuery</li>
        </ul>
        {/* App.css에 스타일시트 정의 */}
        {/* index.css에 정의한 스타일시트 적용*/}
        <li className="backEnd">백앤드</li> 
        <ul>
          <li id='backEndSub'>java</li> 
          {/*클래스 속성을 사용하면 에러가 발생하지는 않으나 걍거가 방생되므로
          권고사항대로 classname을 뜻함*/ }
          <li class="warnings">Oracle</li>
          <li>JSP</li>
          <li>Spring Boot</li>
        </ul>
      </ol>
    </div>
   );
}
export default App;

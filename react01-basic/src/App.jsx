/** 
props(프롭스) 
  :react에서 상태를 저장하기 위한 값으로 컴포넌트가 자식 컴포넌트로 전달하는
  읽기전용 데이터를 말한다. 전달시에는 HTML의 속성처럼 기술한다
  형식]
    <컴포넌트 props속성명={전달할값}/>
    -> 이렇게 전달하면 자식 컴포넌트애서는 'props.속성명'과 같이 사용할 수 있다.
*/
/** 
컴포넌트로 전달되는 모든 프롭스를 매개변수 props를 통해 한꺼번에 받는다. 이렇게
받은 값은 객체와 같이 'props.프롭스명'으로 사용할 수 있다.
 */
function FrontComp(props) {
  const liRows = [];

  for(let i=0; i<props.propData1.length; i++) {
    liRows.push(
      <li key={i}>{props.propData1[i]}</li>
    );
  }
  return(<>
  <li>프론트엔드</li>
  <ul>
    {liRows}
  </ul>
  </>)
  }
  const BackComp = ({propData2}) => {
    const liRows = [];

    let keyCnt=0;
    for(let row of propData2) {
      liRows.push(
        <li key={keyCnt++}>{row}</li> 
      );
    }
    return(<>
  <li>백엔드</li>
  <ul>
    {liRows}
  </ul>
  </>)
  
  }
function App() {
  //props로 사용할 배열 변수 선언
  const frontData = ['HTML5', 'CSS3', 'Javascript', 'jQuery', 'React추가']  ;
  const backData = ['Java', 'Oracle', 'JSP', 'Spring Boot', 'Nextjs추가'] ;
  return (
    <div>
      <h2>React-Props</h2>  
      <ol>
        {/** 배열 데이터를 자식 컴포넌트로 props를 통해 전달한다. 프롭스는
         HTML의 속성을 명시하듯 기술하면 된다.
         */}
        <FrontComp propData1={frontData}></FrontComp>
        <BackComp propData2={backData}/>
      </ol>
    </div>
  );
}

export default App

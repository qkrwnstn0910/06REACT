//함수형 컴포넌트 생성 파일명과 동일한 이름으로 생성한다.
function ListComponent(props){
  /** 
  컴포넌트에서 실제 표현해야 하는 ui를 return문 내부에 기술한다. 기존
  클래스형 컴포넌트에서는 render() 함수가 있었는데 함수형에서는 
  return이 역할을 대신한다.
   */
  return (
    <>
    {/** JSX를 통해 ui를 표현할때 최상위 엘리먼트는 만드시 하나여야 한다.
         현 시점에는 React에서 프래그먼트를 제공하므로 이를 통해 묶어주면
         된다. 프래그먼트는 빈 꺽쇄괄호로 표현하면 된다.
     */}
      <header>
        <h2>게시판-목록</h2>
      </header>
      <nav>
        {/* a태그의 기본동작(화면이동)을 차단하고 프롭스로 전달받은 함수
            를 호출하여 스테으트를 write로 변경한다. 즉 작성 화면으로 
            전환하기 위한 함수를 생성한다. */}
      <a href="#" onClick={(e) => {
        e.preventDefault();
        props.changeMode("write");
        }}>글쓰기</a>
      </nav>
  <article>
    <table id="boardTable">
      <thead>
        <tr>
          <th>no</th>
          <th>제목</th>
          <th>작성자</th>
          <th>날짜</th>
        </tr>
      </thead>
      <tbody>
      {/* 스타일 설정을 위해 사용한 class속성은 classname으로 변경해야한다
          자바스크립트에서 이미 class 키워드가 있기 때문이다. */}
      <tr>
        <td class="cen">1</td>
        <td>
          <a href="#" onClick={(e) => {
          e.preventDefault();
          props.changeMode("view");
          }}>오늘은 리엑트 공부하는날</a>
        </td> 
        <td class="cen">낙짜쌤</td>
        <td class="cen">2030-05-05</td>
      </tr>
      </tbody>
    </table>
  </article>
  </>
  );
}

export default ListComponent;
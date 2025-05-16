import { Link } from "react-router-dom";

function Write(props) {
  //App컴포넌트에서 전달해준 슽테이트와 관련함수를 모두 받아서 상수에 저장
  const boardData=props.boardData;
  const setBoardData=props.setBoardData;
  const nextNo=props.nextNo;
  const setNextNo=props.setNextNo;
  const navigate=props.navigate;
  const nowDate=props.nowDate;

  return(<>
  <header>
    <h2>게시판 작성</h2>
  </header>
   <nav>
    {/* <a href="/">목록</a>   */}
    <Link to="/list">목록</Link>
  </nav>
  <article>
    <form onSubmit= {
      (e)=>{
        //submit 이벤트 차단
        e.preventDefault();

        //이벤트 객체의 target속성으로 Dom의 입력값을 읽어옴
        let w = e.target.writer.value;
        let t = e.target.title.value;
        let c = e.target.contents.value;

        //스테이트, 폼값, 함수의 반환값으로 새롭게 추가할 객체 생성
        let addBoardData = {no:nextNo, writer:w, title:t, contents:c, date:nowDate()};
        //기존데이터의 복사본을 생성
        let copyBoardData = [...boardData];
        //새로만든 객체를 추가
        copyBoardData.push(addBoardData);
        //이를통해 스테이트를 변경(업데이트)
        setBoardData(copyBoardData);
        //시퀀스 번호 증가
        setNextNo(nextNo+1) ;
        //모든 작업이 완료되면 목록으로 이동한다.
        navigate("/list");
      }
    }>
      <table id="boardTable">
        <tbody>
          <tr>
            <th>작성자</th>
            <td><input type="text" name="writer" /></td>
          </tr>
          <tr>
            <th>제목</th>
            <td><input type="text" name="title" /></td>
          </tr>
          <tr>
            <th>내용</th>
            <td><textarea name="contents" rows="3"></textarea></td>
          </tr>
        </tbody>
      </table>
      <input type="submit" value="전송"/>
    </form>
  </article>
  </>);
}

export default Write;

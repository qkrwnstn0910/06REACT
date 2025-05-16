import { Link } from "react-router-dom"

function View(props) {
  return (<>
    <header>게시판 읽기</header> 
    <nav>
    {/* <a href="/list">목록</a>&nbsp;
    <a href="/edit">수정</a>&nbsp;
    <a href="delete">삭제</a> */}
    <Link to="/list">목록</Link>&nbsp;
    <Link to="/edit">수정</Link>&nbsp;
    <Link to="/delete">삭제</Link>
  </nav>
  <article>
    <table id="boardTable">
      <colgroup>
        <col width="20%"/><col width="*"/>
      </colgroup>
      <tbody>
        <tr>
          <th>
            작성자    
          </th>
          <td>
            성유겸
          </td>

        </tr>
        <tr>
          <th>제목</th>
          <td>오늘을 리엑트 공부하는날</td>
        </tr>
        <tr>
          <th>날짜</th>
          <td>2025-05-14</td>
        </tr>
        <tr>
          <th>내용</th>
          <td>열심히 해봅시다<br/>열공 합시당</td>
        </tr>
      </tbody>
    </table>
  </article>
  </>);
}

export default View;
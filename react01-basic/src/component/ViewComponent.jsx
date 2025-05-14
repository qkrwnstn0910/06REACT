function ViewComponent(props){
  return (
    <>
      <header>
        <h2>게시판-읽기</h2>
      </header>
      <nav>
    <a href="#" onClick={(e)=>{
      e.preventDefault();
      props.changeMode("list");
    }}>목록</a>&nbsp;
    <a href="#" onClick={(e)=>{
      alert('수정');
      e.preventDefault();
    }}>수정</a>&nbsp;
    <a href="#" onClick={(e)=>{
      alert("삭제");
      e.preventDefault();
    }}>삭제</a>&nbsp;
  </nav>
  <article>
    <table id="boardTable">
      <colgroup>
        <col width="30%"/><col width="*"/>
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

    </>
  );
}

export default ViewComponent;
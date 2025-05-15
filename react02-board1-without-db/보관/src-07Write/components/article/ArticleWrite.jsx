function ArticleWrite(props) {
  return (
    <article>
      <form onSubmit={(e)=>{
        //제출되는것을 차단
        e.preventDefault();

        //이벤트 객체의 target속성으로 form하위 태그에 접근하여 value를 읽어온다
        let title = e.target.title.value;
        let writer = e.target.writer.value;
        let contents = e.target.contents.value;

        props.writeAction(title,writer,contents);
      }}>
        <table id="boardTable">
          <tbody>
            <tr>
              <th>작성자</th> 
              <td><input type="text" name="writer"/></td>
            </tr>
            <tr>
              <th>제목</th> 
              <td><input type="text" name="title"/></td>
            </tr>
             <tr>
              <th>내용</th> 
              <td><textarea name="contents" rows="3"/></td>
            </tr>
          </tbody>
        </table>
        <input type="submit" value={"전송"}/>
      </form>
    </article>
  );
}
export default ArticleWrite;
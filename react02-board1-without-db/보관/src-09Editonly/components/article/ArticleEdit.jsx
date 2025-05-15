function ArticleEdit(props) {
  return (
    <article>
      <form onSubmit={(e) => {
        e.preventDefault();
        let title = e.target.title.value;
        let writer = e.target.writer.value;
        let contents = e.target.contents.value;
        // console.log('ArticleEdit컴포', title, writer, contents);
        props.editAction(title, writer, contents);
      }}>
        <table id="boardTable">
          <tbody>
            <tr>
              <th>작성자</th> 
              <td><input type="text" name="writer" value={props.selectRow.writer}/></td> 
            </tr>
            <tr>
              <th>제목</th> 
              <td><input type="text" name="title"value={props.selectRow.title}/></td> 
            </tr>
            <tr>
              <th>내용</th> 
              <td><textarea name="contents" cols="22" rows="3" 
                      value={props.selectRow.contents}/></td> 
            </tr>
          </tbody>
        </table>
        <input type="submit" value="수정하기"/>
      </form>
    </article>
  );
}
export default ArticleEdit;
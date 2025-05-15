import { useState } from "react";

function ArticleEdit(props) {
  /*위와같은 문제로 프롭스를 스테이트에 저장한 후 onChange 이벤트 리스너를 통해 설정된
  값을 수정할 수 있도록 변경해야한다.
  input의 갯수만큼 스테이트를 생성한다. 프롭스로 전달된 데이터를 스테이트에 저장한 후
  변환함수가지 정의한다.
  이렇게하면 프롭스는 그 값을 동일하게 유지하게 되고 복사본인 스테이트만 변경하는 구조가
  된다*/
  const [title, setTitle] = useState(props.selectRow.title);
  const [writer, setWriter] = useState(props.selectRow.writer)  ;
  const [contents, setContents] = useState(props.selectRow.contents); 
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
              <td><input type="text" name="writer" value={writer}
                    onChange={(e)=>{setWriter(e.target.value)}}/></td> 
            </tr>
            <tr>
              <th>제목</th> 
              <td><input type="text" name="title"value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}/></td> 
            </tr>
            <tr>
              <th>내용</th> 
              <td><textarea name="contents" rows="3" value={contents}
                    onChange={(e)=>{setContents(e.target.value)}}/></td> 
            </tr>
          </tbody>
        </table>
        <input type="submit" value="수정하기"/>
      </form>
    </article>
  );
}
export default ArticleEdit;
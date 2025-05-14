//스테이트 사용을 위한 훅 임포트
import { useState } from "react";

//페이지가 없을때 임시로 사용하기 위한 컴포넌트
function ReadyComp() {
  return (
    <div>
      <h3>컴포넌트 준비중입니다</h3>
      <a href="/">Home바로가기</a>
    </div>
  );
}
/*매개변수 props를 통해 전달된 값을 출력*/
//헤더 컴포넌트는 모든 페이지에서 공통으로 사용된다.
function Header(props) {
  console.log('props',props.title);
  return (
    <header>
      <h2>{props.title}</h2>  
    </header>
  )
}
function NavList(props) {
  return (
    <nav>
      <a href="/" onClick={function(e) {    
        e.preventDefault();
        props.onChangeMode();
        
        }}>글쓰기</a>
    </nav>
  )
}
function NavWrite(props) {
  return (
    <nav>
      <a href="/" onClick={function(e) {
        e.preventDefault();
        props.onChangeMode('list');
      }}>목록</a>
    </nav>
  )
}
function NavView(props){
  return (
    <nav>
      <a href="/"onClick={function(e){
        e.preventDefault();
        props.onChangeMode('list');
      }}>목록</a>&nbsp;
       <a href="/"onClick={function(e){
        e.preventDefault();
        props.onChangeMode('edit');
      }}>수정</a>&nbsp;
       <a href="/"onClick={function(e){
        e.preventDefault();
        props.onChangeMode('delete');
      }}>삭제</a>
    </nav>
  )
}
function ArticleList(props) {    
  const lists = [];
  for(let i=0; i<props.boardData.length; i++){
    let row = props.boardData[i];
    lists.push(
      <tr key={row.no}>
        <td className="cen">{row.no}</td>
        <td><a href={'/read/'+row.no} onClick={(e)=> {
          e.preventDefault();
          props.onChangeMode(row.no);
        }}>{row.title}</a></td>
        <td className="cen">{row.writer}</td>
        <td className="cen">{row.date}</td>
      </tr>
    );
  }
  return (
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
        {lists}
      </tbody>
    </table>
  </article>
  )
}
function ArticleView(props) {
  return (
    <article>
      <table id="boardTable">
        <colgroup>
          <col width="20%"/><col width="*"/>
        </colgroup>
        <tbody>
          <tr>
            <th>작성자</th> 
            <th>성유겸</th> 
          </tr>
          <tr>
            <th>제목</th> 
            <td>오늘은 리엑트 공부하는날</td> 
          </tr>
          <tr>
            <th>날짜</th> 
            <td>2023-05-05</td>
          </tr>
          <tr>
            <th>내용</th> 
            <td>열심히 해봅시당<br/>열공합시당</td>   
          </tr>
        </tbody>
      </table>
    </article>
  );
}

function ArticleWrite(props) {
  return (
    <article>
      <form>
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
function App() {
  const boardData = [
    {no:1, title:'오늘은 리엑트 공부하는날', writer:'낙짜쌤',
      date:'2023-01-01',contents:'리엑트를 뽀게봅시당'},
    {no:2, title:'어제는 자바스크립트 공부해씸', writer:'유겸이',
      date:'2023-03-03',contents:'자바스크립트는 할게 너무 많아요'},
    {no:3, title:'내일은 프로젝트해야징', writer:'개똥이',
      date:'2023-05-05',contents:'프로젝트는 뭘 만들어볼까?'},
  ];
  const [mode, setMode] = useState('list');

  let articleComp, navComp, titleVar;
  if(mode==='list') {
    titleVar = '게시판-목록(props)';
    navComp = <NavList onChangeMode={()=>{
      setMode('write');
    }}></NavList>
    articleComp = <ArticleList boardData={boardData}
    onChangeMode={(no)=> {
      console.log('선택한 게시물 번호:' + no);
      setMode('view');
    }}></ArticleList>
    }
    else if(mode==='view') {
    titleVar = '게시판-읽기(props)';
    navComp = <NavView onChangeMode={(pmode)=>{
      setMode('pmode');
    }}></NavView>
    articleComp = <ArticleView/>
  }
    else if(mode==='write') {
    titleVar = '게시판-글쓰기(props)';
    navComp = <NavWrite onChangeMode={(pmode)=>{
      setMode('pmode');
    }}></NavWrite>
    articleComp = <ArticleWrite/>
  }
  else {
    navComp =<ReadyComp></ReadyComp>;
    articleComp = '';
  }

  return ( 
    <div className="App">
      <Header title={titleVar}></Header>
      {navComp}
      {articleComp}
    </div>
  );
}

export default App;

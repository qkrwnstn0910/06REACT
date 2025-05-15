import { useState } from "react";

import NavList from "./components/navigation/NavList";
import NavView from "./components/navigation/NavView";
import NavWrite from "./components/navigation/NavWrite";
import ArticleList from "./components/article/ArticleList";
import ArticleView from "./components/article/ArticleView";
import ArticleWrite from "./components/article/ArticleWrite";

function ReadyComp() {
  return (
    <div>
      <h3>컴포넌트 준비중입니다</h3>
      <a href="/">Home바로가기</a>
    </div>
  );
}
function Header(props) {
  console.log('props',props.title);
  return (
    <header>
      <h2>{props.title}</h2>  
    </header>
  )
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
  //선택한 게시물의 일련번호를 저장 첫실행기에는 선택한 게시물이 없으므로 null
  //로 초기화
  const [no, setNo] = useState(null);
  //컴포넌트와 제목을 저장할 변수 선언
  //선택한 게시물의 객체를 저장할 변수 추가(no1, title같은 객체를 저장)
  let articleComp, navComp, titleVar, selectRow;
  if(mode==='list') {
    titleVar = '게시판-목록(props)';
    navComp = <NavList onChangeMode={()=>{
      setMode('write');
    }}></NavList>
    articleComp = <ArticleList boardData={boardData}
    onChangeMode={(no)=> {
      console.log('선택한 게시물 번호:' + no);
      //화면을 열람으로 전환
      setMode('view');
      //선택한 게시물의 일련번호로 저장
      setNo(no);
    }}></ArticleList>
    }
    else if(mode==='view') {
    titleVar = '게시판-읽기(props)';
    navComp = <NavView onChangeMode={(pmode)=>{
      setMode(pmode);
    }}></NavView>
    console.log("현재no:", no, typeof(no));
    //선택한 게시물의 일련번호과 일치하는 객체를 검색하기 위해 반복
    for(let i=0; i<boardData.length; i++) {
      if(no===boardData[i].no ){
        //일치하는 게시물이 있다면 변수에 저장
        selectRow = boardData[i];
      }
    }
    //선택한 게시물을 프롭스를 통해 자식 컴포넌트로 저장
    articleComp = <ArticleView selectRow={selectRow}/>
  }
  
    else if(mode==='write') {
    titleVar = '게시판-글쓰기(props)';
    navComp = <NavWrite onChangeMode={(pmode)=>{
      setMode(pmode);
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

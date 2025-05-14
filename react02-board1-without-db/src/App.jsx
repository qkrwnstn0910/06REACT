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

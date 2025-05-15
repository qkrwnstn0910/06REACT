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
  //게시판의 데이터로 사용할 객체형 배열
  /*작성을 위해 기존의 객체형 배열을 스테이트로 변환한다. 데이터의 추가 삭제가 있을때
  새로운 랜더링이 되어야 하기 때문이다*/
  const [boardData, setBoardData] = useState([
    {no:1, title:'오늘은 리엑트 공부하는날', writer:'낙짜쌤',
      date:'2023-01-01',contents:'리엑트를 뽀게봅시당'},
    {no:2, title:'어제는 자바스크립트 공부해씸', writer:'유겸이',
      date:'2023-03-03',contents:'자바스크립트는 할게 너무 많아요'},
    {no:3, title:'내일은 프로젝트해야징', writer:'개똥이',
      date:'2023-05-05',contents:'프로젝트는 뭘 만들어볼까?'},
  ]);
  const [mode, setMode] = useState('list');
  //선택한 게시물의 일련번호를 저장 첫실행기에는 선택한 게시물이 없으므로 null
  //로 초기화
  const [no, setNo] = useState(null);
  //컴포넌트와 제목을 저장할 변수 선언
  //선택한 게시물의 객체를 저장할 변수 추가(no1, title같은 객체를 저장)
  //새로운 게시물 작성시 사용할 시퀀스 용도의 스테이트 생성
  const [nextNo, setNextNo] = useState(4) ;
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
    articleComp = <ArticleWrite writeAction={(t,w,c)=> {
      //3개의 값을 받을 수 있는 함수를 정의하여 프롭스로 전달
      console.log('App.js', t, w, c);
      //작성일을 Date객체를 통해 생성
      let DateObj = new Date();
      //현재년도
      var year = DateObj.getFullYear();
      //getMonth() : 0~11까지를 반환하므로 +1해야 현재월을 구할 수 있다.
      var month = ("0"+(1+ DateObj.getMonth())).slice(-2) ;
      var day = ("0"+ 1+ DateObj.getDate()).slice(-2) ;
      /*월과 일이
          한자리인 경우에는 01과 같이 생성되고
          두자리인 경우에는 012와 같이 생성되므로 끝에서 두자리만 잘라낸다
          이때 slice(-2)를 사용한다.*/
      //0000-00-00 형식으로 날짜를 생성한다.
      let nowDate = year +"-"+month+"-"+day;
      //스테이트 배열에 추가할 객체를 생성한다. 일련번호를 스테이트로 선언한 nextNo를
      //사용하고 작성촘에서 입력한 값을 받아서 구성한다.
      let addBoardDate = {no:nextNo, title:t, writer:w, contents:c, date:nowDate};
      //추가방법 1
      let copyBoardDate = [...boardData];
      copyBoardDate.push(addBoardDate);
      setBoardData(copyBoardDate);
      /**
      배열의 복사본을 만들면 메모리에는 새로운 배열이 하나 추가된다. 복사본에 데이터를
      추가한 후 이를 통해 state를 변경한다. 그러면 새롭게 생성된 배열의 참조값을 통해
      state를 변경했으므로 react는 변화를 맞이하여 새로운 랜더링을 하게된다
      자바스크립트는 얕은참조라는 개념을 통해 객체의 변화를 감지하도록 설계되어 있어 
      이와같이 처리하는 것이다.
       */
      /*추가방법2
      boardData.push(addBoardData);
      console.log(boardDate);
      setBoarddata(boardData);*/

      setNextNo(nextNo+1);
      setMode('list');
    }}/>
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

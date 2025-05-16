//라우팅 관련 컴포넌트 임포트
import { BrowserRouter } from "react-router-dom";
import { Routes,Route } from "react-router-dom";

import List from './components/board/List';
import View from './components/board/View';
import NotFound from './components/board/NotFound';
import Write from "./components/board/write";

function App() {
   {/*데이터로 사용할 객체형 배열 생성.*/}
     const boardData = [
        {no:1, title:'오늘은 리엑트 공부하는날', writer:'낙짜쌤',
          date:'2023-01-01',contents:'리엑트를 뽀게봅시당'},
        {no:2, title:'어제는 자바스크립트 공부해씸', writer:'유겸이',
          date:'2023-03-03',contents:'자바스크립트는 할게 너무 많아요'},
        {no:3, title:'내일은 프로젝트해야징', writer:'개똥이',
          date:'2023-05-05',contents:'프로젝트는 뭘 만들어볼까?'},
      ];
      
  return (
      <div className="App"> 
        <Routes>
          {/*데이터로 사용할 배열을 프롭스로 자식컴포넌트로 전달*/}
          <Route path="/" element={<List boardData={boardData}/>} />
          <Route path="/list" element={<List boardData={boardData} />}/>
          {/*열람의 경우 게시물의 일련번호를 통해 객체를 선택해야 하므로 중첩라우터로 구현하고
          일련번호의 경우 :no로 기술되어잇다.*/}
          <Route path="/view" >
            <Route path=':no' element={<View boardData={boardData} />} />
          </Route>
          <Route path="/write" element={<Write />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
);
}

export default App;

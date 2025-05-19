//라우팅 관련 컴포넌트 임포트
import { Routes,Route } from "react-router-dom";

import List from './components/board/List';
import Write from './components/board/Write';
import View from './components/board/View';
import NotFound from './components/board/NotFound';
import Edit from './components/board/Edit';

function App() {
  return (
   
      <div className="App">
     
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/list" element={<List />}/>
          {/*중첩라우팅으로 게시물의 일련번호가 하위경로 형태로 추가된다. 이것을 useParams 훅을 통해
          읽어올 수 있다.*/}
          <Route path="/view">
            <Route path="/view/:idx" element={<View />}/>
          </Route>
          <Route path="/write" element={<Write />} />
          <Route path="edit">
            <Route path="/edit/:idx" element={<Edit/>}/>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
);
}

export default App;
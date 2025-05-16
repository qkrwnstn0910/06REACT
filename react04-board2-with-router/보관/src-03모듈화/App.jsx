//라우팅 관련 컴포넌트 임포트
import { BrowserRouter } from "react-router-dom";
import { Routes,Route,Link } from "react-router-dom";

import List from './components/board/List';
import Write from './components/board/write';
import View from './components/board/View';
import NotFound from './components/board/NotFound';

function App() {
   {/*라우팅 처리를 위해 App컴포넌트를 감싸야 하므로 이와 같이 App.jsx에서 처리해도 된다.
      하지만 주로 main.jsx에서 처리하는게 좋다.*/}
  return (
   
      <div className="App">
     
        <Routes>
          {/*첫 실행시에는 목록이 랜더링 된다.*/}
          <Route path="/" element={<List />} />
          <Route path="/list" element={<List />}/>
          <Route path="/view" element={<View />} />
          <Route path="/write" element={<Write />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
);
}

export default App;

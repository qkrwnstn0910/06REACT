import { useEffect } from "react";
import { storage } from "./storageConfig";
import { useState } from "react";
import {ref,listAll,deleteObject} from "firebase/storage";

//삭제 기능을 가지고 있는 컴포넌트
function App() {
  const listRef = ref(storage,'');

  const [fileLists, setFileLists] = useState([]);
  const [renderFlag, SetRenderFlag] = useState(false); 
  useEffect(() => {
    let fileRows = [];
    listAll(listRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          console.log('폴더', folderRef);
        });
        res.items.forEach((itemRef) => {
          //개별파일을 반복하면서 풀 경로를 통해 삭제를 위한 참조객체 생성
          const deleteRef = ref(storage, itemRef.fullPath);
          
            fileRows.push(
              <tr key={itemRef.name}>
                <td>{itemRef.bucket}</td>
                <td>{itemRef.fullPath}</td>
                <td>{itemRef.name}</td>
                <td><button type="button" onClick={(e) => {
                  if(window.confirm('삭제할까요?')) {
                    //삭제할 파일의 참조객체를 통해 파일 삭제 처리
                    deleteObject(deleteRef).then(()=> {
                    console.log('파일 삭제성공');
                    //삭제 성공시에는 화면의 리렌더링
                    SetRenderFlag(!renderFlag);
                  
                  })
                  .catch((error) => {
                    console.log('파일 삭제 실패');  
                  });
                }
              }}>삭제</button></td>
              </tr>
            );
        });

        setFileLists(fileRows);
      })
      .catch((error) => {
        console.log('파일 목록 출력중 에러발생',error);
      });
  },[renderFlag]);
  //파일 삭제시 renderFlag가 변경되므로 그대마다 useEffect가 재실행 되도록
  //하는 의존성 배열ㅇㄹ 설정한다.
  console.log('렌더링');
  return (
    <div className="App">
      <h2>firebase -스토리지 앱</h2>  
      <h3>파일 목록 및 삭제</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>bucket</th>
            <th>fullpath</th>
            <th>name</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {fileLists}
        </tbody>
      </table>
    </div>
  );

}
export default App;
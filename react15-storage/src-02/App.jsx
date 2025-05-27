import { useEffect } from "react";
import { storage } from "../../src-02/storageConfig";
import { useState } from "react";
import {ref,listAll,getDownloadURL} from "firebase/storage";

function App() {
  //스토리지 연결 및 root경로로 참조객체 생성
  const listRef = ref(storage,'');

  useEffect(() => {
    let fileRows = [];
    //생성된 스토리지 root 경로의 참조객체ㅇ를 통해 모든 폴저ㅘ 파일명 인출
    listAll(listRef)
      .then((res) => {
        //콜백데이터 res를 통해 prefixes를 사용하면 폴더명을 배열로 인출
        res.prefixes.forEach((folderRef) => {
          console.log('폴더', folderRef);
        });
        //파일명 출력
        res.items.forEach((itemRef) => {
          console.log('파일명', itemRef.name);

          getDownloadURL(ref(storage, itemRef.name))
            .then((url) => {
              console.log('파일 다운로드');
              const img = document.getElementById(`img_${itemRef.name}`);
              img.setAttribute('src',url);
              img.setAttribute('width','200');
            })
            .catch((error) => {
              console.log('이미지 다운도드 중 에러');
            });
            fileRows.push(
              <tr key={itemRef.name}>
                <td>{itemRef.bucket}</td>
                <td>{itemRef.fullPath}</td>
                <td>{itemRef.name}</td>
                <td><img id={`img_${itemRef.name}`}alt=''/></td>
              </tr>
            );
        });

        setFileLists(fileRows);
      })
      .catch((error) => {
        console.log('파일 목록 출력중 에러발생',error);
      });
  },[]);
  const [fileLists,setFileLists ]= useState([]);
  console.log('렌더링');
  return (
    <div className="App">
      <h2>firebase -스토리지 앱</h2>  
      <h3>파일 목록 및 이미지 다운로드</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>bucket</th>
            <th>fullpath</th>
            <th>name</th>
            <th>이미지</th>
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
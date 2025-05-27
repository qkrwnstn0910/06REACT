import { storage } from "./storageConfig"
import { ref, uploadBytes} from "firebase/storage";

const storageRef = ref(storage);
console.log('storageRef',storageRef);

const imagesRef1 = ref(storage, 'images');
const imagesRef2 = ref(storage, 'images/myFile,jpg');

const imagesRef3 = imagesRef2.parent;
const imagesRef4 = imagesRef2.root;

console.log('ref객체 ',imagesRef1 );
console.log('경로1 ',imagesRef1.fullpath );
console.log('경로2 ',imagesRef2.fullpath  );
console.log('경로3 ',imagesRef3 .fullpath );
console.log('경로4 ',imagesRef4 .fullpath );

function App() {

  return (
   <div className="App">
    <h2> 파이어베이 사토리지</h2>
    <h3>스토리지 접속 및 파일 업로드</h3>
    <p>파일을 선택ㅎ하면 즉시 업로드합니다.</p>   
    <input type="file" name="myfile" onchange={(e) => {
      console.log('files 프로미터',e.target.files);
      /*파일업로드
      const ref(변수) = ref(스토리지객체, 파일명);
      uploadBytes(ref변수, 파일객체).then(성공시 콜백함수);  */
      const imageRef = red(storage, e.target.files[0].name);
      uploadBytes(imageRef,e.target.files[0]).then((snapshot) => {
        console.log('업로드성공', snapshot);
      });
    }}/>
  </div>
  );
}

export default App
//이거 나중에 한번 해보기
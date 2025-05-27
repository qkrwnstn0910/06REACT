import { useEffect, useState } from "react";
import { realtime } from "../realtimeConfig";
import { ref, onValue} from "firebase/database";
import Navi from "../components/Navi";

export default function Listener () {
  console.log('랜더링중');
  console.log('aa.realtime', realtime);
  //realtime database로 부터 받은 데이터를 저장하기 위한 스테이트
  const [fireDate, setFireData] = useState([]);
  //'users' 노드를 참조한 객체 생성
  const dbRef = ref(realtime, 'users');
  //1차 렌더링 후 내부의 코드 실행을 위한 수명주기 훅 선언
  useEffect (()=> {
    /*
    onvalue()
      : 특정 노드의 데이터를 읽고 변경사항을 감지하기 위해 수신대기하는 
      함수로 이벤트 발생 지점에 특정 경로에 있는 정적 스냅샷을 읽는데 사용
      된다. 노드의 하위 요소를 포함하여 데이터가 변경될때마다 자동으로 동작
      한다.
    */
    onValue(dbRef, (snapShot) => {
      let showTr = [];
      //이벤트(입력 혹은 수정 등) 가 감지되면 데이터 전체를 배열로 가져온다
      snapShot.forEach((childSnapshot) => {
        //각 객체의 key와 Value를 추출
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        //화면에 출력할 내용을 만듬
        console.log('childkey',childData);
        showTr.push(
          <tr>
            <td>{childKey}</td>
            <td>{childData.name}</td>
            <td>{childData.pass}</td>
            <td>{childData.fireKey}</td>
          </tr>
        );
      });
      console.log('bb', showTr);
      //출력할 내용으로 스테이트를 변경 후 리렌더랑
      setFireData(showTr);
    });
  }, []);
  console.log('cc');  
  return(
    <div className="App">
      <Navi />
      <h2>Firebase - realtime Database App</h2>
      <h3>02.Listener</h3>  
      <table border={1} className="table table-bordered">
        <thead>
          <tr className="text-center">
            <th>아이디</th> 
            <th>이름</th>
            <th>패스워드</th> 
            <th>고유키</th>
          </tr>
        </thead>
        <tbody>
          {fireDate}
        </tbody>
      </table>
    </div>
  );
}
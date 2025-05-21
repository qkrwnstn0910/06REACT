import { useState } from 'react';

import Header from './components/Header';
import AddPlayerForm from './components/AddPlayerForm';
import Player from './components/Player';
import Stats from './components/Stats';

function App() {
  //데이터로 사용할 객체형 배열을 스테이트로 생성
  const [playerData, setPlayerData] = useState([
    {idx: 1, name: '홍길동', score: 10},
    {idx: 2, name: '손오공', score: 20},
    {idx: 3, name: '유비', score: 30},
    {idx: 4, name: '달타냥', score: 40},
  ]);
  //시퀀스로 사용할 스테이트 생성 초기값은 5부터 시작
  const [nextVal, setNextVal] = useState(5);
  //플레이어 추가를 위한 함수
  const AddPlayerProcess = (pname) => {
    //이름만 매개변수로 받은 후 추가할 객체 생성
    console.log('onAddPlayer',pname);
    let addPlayer = {idx:nextVal, name: pname, score:0};
    

    if(pname.trim() === '') {
      alert('이름을 입력하시오');
    }
    else {
      alert('선수가 추가되었습니다.')
      // 기존 데이터의 복사본 배열 생성
      let copyPlayers = [...playerData];
      // 복사본에 새로운 데이터 추가
      copyPlayers.push(addPlayer);
      // setter함수를 호출해서 스테이트를 변경
      setPlayerData(copyPlayers);
      // 추가 후 시퀀스 증가
      setNextVal(nextVal +1)  ;

      // 방법2 선호
      // setPlayerData{...playerData, addPlayer};
      // 방법2 : useref 훅 사용
    // const playerName2 = PlayerInputRef.current.value;
    // if(playerName2=='') {
    //   alert('플레이어 이름을 입력하세여');
    //   return;
    // }

    //데이터가 추가되지만 리 렌더링 되지않음
    //원본 데이터를 변경하는 것은 권장하지 않음(얕은참조)
    // playerData.push(addPlayer);
    // setPlayerData(Players);
    // console.log(Players);
    }
    }
    //점수의 증감을 위한프로세스, 매개변수는 증감을 위한 플래그 선수의 일련번호
    const scoreChangeProcess = (flag, playerIdx) => {
      console.log('idx',playerIdx, 'flag', flag);
      //복사본 배열 생성
      let copyPlayers = [...playerData];
      //복사본을 통해 반복
      copyPlayers.forEach((row)=> {
        if(row.idx === playerIdx) {
          //flag의 데이터에 따라 변경
          console.log(row.name);
          if(flag==='+'){
            row.score += 5;}
          else{
            if(row.score<1) {
              alert('음수는 점수가 될수 없습니다.');
              return row.score = 0;
            }
            else {
              row.score-=5;

              //점수는 음수가 될수 없으므로 0점으로 고정한다.
            }
            }
        }

      });
      //수정된 복사본을 통해 스테이트 변경
      setPlayerData(copyPlayers);
    }

    const deletePlayerProcess = (deletePlayer) => {
        // const play = playerData.filter(player => player.idx !==deletePlayer);
      //   console.log('삭제idx',playerIdx);
      //   let play = [];
      //   for (let i = 0; i < playerData.length; i++) {
      //   if (playerData[i].idx !== deletePlayer) {
      //   play.push(playerData[i]);
      // }
      console.log('삭제idx',deletePlayer);
      //방법 2: reduce함수 사용
      /*prev는 초기값으로 빈배열을 지정하고 각 루프에서 삭제할 플레이어를 제외한
      나머지 객체를 추가한다 */
      let play= playerData.reduce((prev,curr) => {
        
        if (curr.idx !== deletePlayer){
          prev.push(curr);

        }
        return prev;
      },[]);
      setPlayerData(play);
    }
    //수정을 위한 함수
    const editPlayerProcess = (idx,name) => {
      console.log('수정',idx,name);
      let newPlayersData = playerData.filter((row) => {
        //수정할 선수의 idx와 일치하면 이름을 수정한다.
        if(row.idx === idx) {
          row.name = name;
        }
        //여기서 반환한 객체를 통해 새로운 배열이 생성된다.
        return row;
      });
      setPlayerData(newPlayersData);
    }
  
  return (
    <div className="scoreboard">
      {/* 인원수 점수합산을 위해 데이터를프롭스로 전달 */}
      <Header title="My Scoreboard" playerData={playerData}/>
      {
        //map함수를 통해 인원수만큼 반복해서 Player컴포넌트 렌더링
        playerData.map((playerRow) => (
          //선수 한명의 정보를 담은 객체를 순차적으로 전달
          <Player playerData={playerRow}  key={playerRow.idx}
          //점수변경을 위한프롭스로 전달
            onChangeScore={scoreChangeProcess}
            onDeletePlayer={deletePlayerProcess}
            onEditPlayer={editPlayerProcess}/>
        ))  
      }
      {/* 새로운 선수 등록을 위한 입력폼 */}
      {/* 플레이어 추가를 위한 함수를 프롭스로 전달 */}
      <AddPlayerForm onAddPlayer={AddPlayerProcess}></AddPlayerForm>
    </div>
  );

}
export default App;

import { useState } from 'react';
import Counter from '../components/Counter';
import EditPlayerForm from './EditPlayerForm';

export default function Player(props) {
  let row = props.playerData;

  //수정폼을 보임/숨김처리를 위한 스테이트
  const [showEdit, setShowEdit] =useState(false);
  let editform;
  if(showEdit===false) {
    editform = '';
  }
  else {
    //true일때는 컴포넌트를 할당해서 보임처리
    editform = <EditPlayerForm playerData={row.name} playerIdx={row.idx}
      onEditPlayer={props.onEditPlayer}
      showEdit={showEdit} setShowEdit={setShowEdit}/>
  }
  return (<>
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={(e) => {
          if(window.confirm('삭제할까요?'))
          props.onDeletePlayer(row.idx);
        }}> x </button>
        <a href='/' onClick={(e) => {
          e.preventDefault();
          setShowEdit(!showEdit);

        }}>
        {row.name}</a>
      </span>
       {/* app컴포넌트에서 전달받은 함수를 자식 컴포넌트로 재전달한다. 리엑트는 탑
      다운 형식으로 데이터를 전달하는 구조를 가지고 있어 컴포넌트의 구조가 
      복잡해질수록 상태관리가 어려워 진다는 단점이 있다, */}
      <Counter idx={row.idx} score={row.score} onChangeScore={props.onChangeScore}/>
    </div>
    {/*각 선수마다 하위에는 수정폼이 추가된다. 이름을 누를때마다 토글된다.*/}
    {editform}
  </>);
}
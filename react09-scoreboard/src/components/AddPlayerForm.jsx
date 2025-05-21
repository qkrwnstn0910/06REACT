import { useRef } from "react";

/*일반적으로 컴포넌트 선언과 export default는 따로 진행하지만 아래와
같이 선언과 동시에 export 할 수 있다. */
export default function AddPlayerForm(props) {

  // const playerInputref =useRef();
  return (<>
    <form className="form" noValidate
      onSubmit={(e)=> {
        //'제출'이벤트가 발생되면 폼값을 읽어온다
        e.preventDefault();
        let playerName = e.target.player.value;

        //부모에서 전달받은 함수를 호출하여 플레이어 추가
        props.onAddPlayer(playerName);
        //다음선수 입력을 위해 입력란을 비워준다
        e.target.player.value = '';
      }}>
        {/* 위에서 생성한 ref변수를 추가한다. */}
      <input type="text" name="player" minLength="10" className="input" 
        placeholder="이름을 추가하세요" required onChange={()=>{}}
        // ref={playerInputref} 
        />
      <input type="submit" className="input" value="Add Player" />
    </form>
  </>);
}
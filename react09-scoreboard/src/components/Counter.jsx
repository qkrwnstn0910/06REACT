export default function Counter(props) {
  return (<>
    <div className="counter">
      {/* 플레이어 컴포넌트에서 프롭스를 통해 전달받은 함수를 호출하여 점수를 증가
      감소 시킨다. */}
      <button className="counter-action decrement"
        onClick={(e) => { 
          //함수 호출 시 증감을 위한 플래그와 일련번호를 인수로 전달한다.
          props.onChangeScore('-',props.idx);
          }}> -</button>
      <span className="counter-score">{props.score}</span>
     
      <button className="counter-action increment"
        onClick={() => {
          props.onChangeScore('+',props.idx);
          }}> +</button>
    </div>
  </>);
}
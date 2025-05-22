import { useReducer, useState } from "react";

/*학생 컴포넌트 
컴포넌트에서 매개변수를 정의하는 2가지 방법
1.props라는 대표 매개변수를 사용한다. 이때는 2개 이상의 인수를 객체형태
로 받을 수 있으므로 props속성명 과 같이 사용한다.
2.인수를 개별 변수로 전달받는다.*/
const Student = ({name, dispatch, id, isHere}) => {
  return(<>
    <div>
      {/* 학생의 이름을 클릭하면 출석 기능이 토글됨
      학생이 출석한 상태이면 가운데 줄과 회색으로 변경되므로 스타일
      속성을 추가함 이 상태는 isHere에 따라 토글된다. */}
      <span style={{textDecoration: isHere ? 'line-through': 'none'}}
        onClick={()=> {
          // 디스패치 함수 호출시 액션객체를 전달해서 상태 변경 이때 리듀서
          // 함수가 호출된다.
          dispatch({type:'mark',param:{id}});
        }}>{name}</span>
        {/* 삭제 버튼을 누르면 confirm으로 확인 후 삭제 처리를 위해 함수호출 */}
        <button onClick={() => {
          dispatch({type:'delete',param:{id}});
        }}>삭제</button>
    </div>
  </>);
}
const reducer = (state, action) => {
  switch(action.type) {
    case 'add':
      const name = action.param.name;
      const newStudent = {
        id:Date.now(),
        name,
        isHere:false,
      }
      return {
        count:state.count +1,
        students: [...state.students, newStudent],
      }
      case 'delete' :
        const deleteName = action.param.id;
        const answer = window.confirm("삭제할고얌?")
        if(answer) {
          return {
            //학생수는 1 차감
            count:state.count -1,
            //필터 함수를 이용해서 삭제할 학생을 제외한 나머지 객체를 반환하도록
            //정의한 후 반환값을 통해 업데이트 한다.
            /*화살표함수는 매개변수가 1개인 경우 소괄호 생략이 가능하고 반환
            줄이 1줄일 경우 중괄호와 return을 생략할 수 있다. */
            students:state.students.filter(student => student.id!==deleteName),
          }
        }
        else {
          return state;
        }
      //출결처리
      case 'mark' :
        //학생수는 변함없음
          return {
            count: state.count,
            /*출결처리는 학생수에는 변함이 없으므로 map을 사용한다. 처리할
            학생을 찾은 후 isHere부분만 true/false로 변경한다. */
            students: state.students.map((student) => {
              if(student.id === action.param.id){
                //스프레드 연산자 예제 참조
                return{...student, isHere: !student.isHere};
              }
              return student;
            })
          }
        
        
      default:
  }
}
const initialState = {
  count :1,
  students : [
    {
      id:Date.now(), name: '김철수', isHere: false,
    },
  ],
}
function App() {
  const [name, setName] = useState('');
  const [studentInfo,dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <p>총학생수 : {studentInfo.count}</p>
      <input type="text" placeholder="이름을 입력하세요"
        value={name} onChange={(e)=> {
          setName(e.target.value)
        }}/>
        <button onClick={() => {
          dispatch({type:'add', param:{name}});
        }}>추가</button>
          {
            studentInfo.students.map((student) => {
              return <Student key={student.id} name={student.name}
              dispatch={dispatch} id={student.id}
              isHere={student.isHere}/>
            })
          }
    </div>
  );
}
export default App;

import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom"

function View(props) {
  let params = useParams();
  console.log('idx', params.idx);
  //열람 API는 JSON객체이므로 빈 객체를 초기값을 지정
  let [boardData,setBoardData] = useState({}) ;
  let requestUrl = "http://nakja.co.kr/APIs/php7/boardViewJSON.php";
  let parameter = "tname=nboard_news&idx="+params.idx+"&apikey=91625e69b8523cb534dabbfeae6a6d4d";
  //1차 랜더링 후 열람 API요청
  useEffect(function(){
    fetch(requestUrl +"?"+parameter)
    .then((result)=> {
      return result.json();
    })
    .then((json)=>{
      console.log(json);  
      //스테이트 변경 및 리렌더링
      setBoardData(json);
    });
    return ()=> {
      console.log('useEffect실행==>컴포넌트 언마운트');
    }
  }, []);
  return (<>
    <header>게시판 읽기</header> 
    <nav>
    <Link to="/list">목록</Link>&nbsp;
    <Link to={`/edit/${params.idx}`}>수정</Link>
    <Link onClick={() => {
      if(window.confirm('삭제하시겠습니까?')) {
        console.log('삭제idx',params.idx);
        fetch("http://nakja.co.kr/APIs/php7/boardViewJSON.php", {
          method: 'POST',
          headers: {
            'content-type' : 'application/x-www-form-urlencoded; charset=UTF-8',
          },
          body:new URLSearchParams({
            tname:'nboard_news',
            idx:params.idx,
          }),
        })
        .then((result)=> {
          return result.json();
        })
        .then(json=> {
          console.log(json);
          if(json.result==='success'){
            alert('삭제되었습니다.');
            navigata("/list");
          }
          else {
            alert('삭제에 실패했습니다.');
          }
        });
      }
    }}>삭제</Link>
    </nav>
  <article>
    <table id="boardTable">
      <colgroup>
        <col width="20%"/><col width="*"/>
      </colgroup>
      <tbody>
        <tr>
          <th>
            작성자    
          </th>
          <td>
            {boardData.name}  
          </td>

        </tr>
        <tr>
          <th>제목</th>
          <td>{boardData.subject}</td>
        </tr>
        <tr>
          <th>날짜</th>
          <td>{boardData.regdate}</td>
        </tr>
        <tr>
          <th>내용</th>
          {/*HTML태그가 그대로 출력된다. 리엑트는 보안적인 문제로 태그를 화면에 그대로 출력하는것이
          디폴트 설정이다.*/}
          {/*<td>{boardData.content}</td>*/}
          <td dangerouslySetInnerHTML={{__html: boardData.content}}></td>
        </tr>
      </tbody>
    </table>
  </article>
  </>);
}

export default View;
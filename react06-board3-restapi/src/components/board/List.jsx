import { useState ,useEffect } from "react";
import { Link } from "react-router-dom";

function List(props) {
  let [boardData, setBoardData] =useState([]);
  useEffect(function() {
    fetch("http://nakja.co.kr/APIs/php7/boardListJSON.php?tname=nboard_news&apikey=91625e69b8523cb534dabbfeae6a6d4d")
    .then((result) => {
      return result.json();

    })
    .then ((json) => {
      console.log(json);
      setBoardData(json);
    });
    return () => {
      console.log('useEffect실행==>컴포넌트 언마운트'); 
    }
  },[]);

  let lists = [];
  for (let row of boardData) {
    //작성일과 제목은 적당한 길이로 잘라서 출력한다.
    let date = row.regdate.substring(0,10);
    let subject = row.subject.substring(0,20);
    lists.push(
      //tr태그에서는 중복되지 않는 태그 kry props 추가
      <tr key={row.idx}>
          <td className="cen">{row.idx}</td>
          <td><Link to={"/view/"+row.idx}>{subject}</Link></td>
          <td className="cen">{row.name}</td>
          <td className="cen">{date}</td>
      </tr>
    );
  }
  return(<>
    <header>
      <h2>게시판 목록</h2>  
    </header>
    <nav>
      <Link to="/write">글쓰기</Link> 
    </nav>
    <article>

      <table id="boardTable">
        <thead>
          <tr>
            <th>No</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          {lists}
        </tbody>
      </table>
      </article>
  </>)
}

export default List;
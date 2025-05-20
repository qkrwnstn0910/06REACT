import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Write from "./Write";
function Edit(props) {

  const navigate = useNavigate();
  const param = useParams();
  console.log("수정idx", params.idx);

  let requestUrl = "http://nakja.co.kr/APIs/php7/boardViewJSON.php";
  let parameter = "tname=nboard_news&idx="+params.idx+"&apikey=91625e69b8523cb534dabbfeae6a6d4d";

  const [writer, setWriter] = useState('');
  const [title, setTitle] =useState('');
  const [contents, setContents] = useState('');

  useEffect(function() {
    fetch(requestUrl+"?"+parameter)
    .then((result)=> {
      return result.json();
    })
    .then((json)=>{
      console.log(json);
      setWriter(json.name);
      setTitle(json.subject);
      setContents(json.content);
    });
    return ()=>{
      console.log('useEffect실행 ==>컴포넌트 언마운트');
    }
  },[]);
  return(<>
  <header>
    <h2>게시판 작성</h2>
  </header>
   <nav>
    <Link to="/list">목록</Link>
  </nav>
  <article>

    <form onSubmit={
      
      (event) =>{
        event.preventDefault();
        let i = event.target.idx.value;
        let w = event.target.writer.value;
        let t = event.target.title.value;
        let c = event.target.contents.value;
        console.log(w,t,c);
        fetch('http://nakja.co.kr/APIs/php7/boardViewJSON.php', {
          method: 'post',
          header: {
            'Content-type':'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: new URLSearchParams({

            tname:'nboard_news',
            id:'jsonAPI',
            name: w,
            subject: t,
            content: c,
            apikey: '91625e69b8523cb534dabbfeae6a6d4d',
            api : i,
          }),
        })
        .then((Response) => Response.json())
        .then((json) => console.log(json));
        navigate("/list");
      }
    }>
      <table id="boardTable">
        <tbody>
          <tr>
            <th>작성자</th>
            <td><input type="text" name="writer" /></td>
          </tr>
          <tr>
            <th>제목</th>
            <td><input type="text" name="title" /></td>
          </tr>
          <tr>
            <th>내용</th>
            <td><textarea name="contents" cols="22" rows="3"></textarea></td>
          </tr>
        </tbody>
      </table>
      <input type="submit" value="전송"/>
    </form>
  </article>
  </>);
}

export default Write;

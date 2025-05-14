function Header(props) {
  return (
    <nav>
      <h2>게시판 목록</h2>  
    </nav>
  )
}
function Nav() {
  return (
    <nav>
      <a href="/">글쓰기</a>
    </nav>
  )
}


function Article() {    
 
  return (
   <article>
    <table id="boardTable">
      <thead>
        <tr>
          <th>no</th>
          <th>제목</th>
          <th>작성자</th>
          <th>날짜</th>
        </tr>
      </thead>
      <tr>
        <td class="cen">1</td>
        <td>오늘을 리엑트 공부하는날</td> 
        <td class="cen">낙짜쌤</td>
        <td class="cen">2030-05-05</td>
      </tr>
    </table>
  </article>
  )
}
function App() {
  return (
    <div className="App">
      <Header></Header> 
      <Nav></Nav>
      <Article></Article>
    </div>
  )
}

export default App;

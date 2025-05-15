function NavList(props) {
  return (
    <nav>
      <a href="/" onClick={function(e) {    
        e.preventDefault();
        props.onChangeMode();
        
        }}>글쓰기</a>
    </nav>
  )
}
export default NavList;

function NavWrite(props) {
  return (
    <nav>
      <a href="/" onClick={function(e) {
        e.preventDefault();
        props.onChangeMode('list');
      }}>목록</a>
    </nav>
  )
}
export default NavWrite;
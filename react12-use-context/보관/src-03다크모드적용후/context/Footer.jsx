import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

const Footer = () => {
  const { isDark, setIsDark} = useContext(ThemeContext);
  const toggleTheme = () => {
    setIsDark(!isDark);
  }
  return (
    <div className="footer"
      style={{
        backgroundColor : isDark ? 'black' : 'lightgray'
      }}
      >
        <input type="button" value={"Dark Mode"} className="button"
        onClick={toggleTheme}></input>
      </div>
  )
}
export default Footer;
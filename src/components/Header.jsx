import React, {useState} from "react"

function Header() {
  
  const [isActive, setIsActive] = useState(false)
  
  const onHamburgerActive = () => {
    setIsActive(current => !current)
  }
  
  const showActiveClass = () => {
    return isActive ? "active" : null
  }
  
  const removeHamburgerActive = () => {
    setIsActive(false)
  }
  
  return (
      <header className="header">
        <nav className="navbar">
          <a href="/" className="nav-branding">Cory Marker</a>
          
          <ul onClick={removeHamburgerActive} className={`nav-menu ${showActiveClass()}`}>
            <li className="nav-item">
              <a href={require("../assets/photos/Cory Marker Resume.pdf")} className="nav-link">Resume</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
          
          <div onClick={onHamburgerActive} className={`hamburger ${showActiveClass()}`}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
  )
}

export default Header

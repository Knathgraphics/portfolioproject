import Logo from "../assets/images/logo.png"


const Header = () => {
  return (
    <div className="header">
        <div className="logo">
            <img src={Logo} className="logo" alt="" />
        </div>
        <div className="navbar">
        <ul className="navlist">
           <a href="#about" id="navhref"><li className="navlink">About</li></a>
           <a href="#projects" id="navhref"><li className="navlink">Project</li></a>
           <a href="#footer" id="navhref"><li className="navlink">Contact</li></a>
            
        </ul>
        </div>
    </div>
  )
}

export default Header
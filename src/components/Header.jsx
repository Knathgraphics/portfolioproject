import Logo from "../assets/images/logo.png"


const Header = () => {
  return (
    <div className="header">
        <div className="logo">
            <img src={Logo} className="logo" alt="" />
        </div>
        <div className="navbar">
        <ul className="navlist">
           <a href="" id="navhref"><li className="navlink">About</li></a>
           <a href="" id="navhref"><li className="navlink">Project</li></a>
           <a href="" id="navhref"><li className="navlink">Contact</li></a>
            
        </ul>
        </div>
    </div>
  )
}

export default Header
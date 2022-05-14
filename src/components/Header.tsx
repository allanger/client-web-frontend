import "./css/header.css"
import HeaderButton from "./HeaderButton";

const Header = () => 
  <div className="navbar">
    <HeaderButton message={"Home"} link={"/home"}/>
    <HeaderButton message={"Services"} link={"/services"}/>
    <HeaderButton message={"About"} link={"/about"}/>
  </div>

export default Header;

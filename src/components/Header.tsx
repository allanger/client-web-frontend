import "./css/header.css"
import HeaderButton from "./HeaderButton";
import {Colors} from "../consts"

const style = {
  backgroundColor: Colors.darkPurple,
  height: '50px',
  padding: '5px',
  margin: '10px 10% 10px 10%',
  display: 'flex',
  justifyContent: 'center',
}

const Header = () => 
  <div style={style}>
    <HeaderButton message={"Home"} link={"/"}/>
    <HeaderButton message={"Reviews"} link={"/reviews"}/>
    <HeaderButton message={"About"} link={"/about"}/>
  </div>

export default Header;

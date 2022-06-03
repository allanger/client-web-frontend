import "./css/header.css"
import HeaderButton from "./HeaderButton";
import { Colors } from "../consts"

const rel: "sticky" = "sticky";

const style = {
  position: rel,
  top: "0",
  backgroundColor: Colors.raisinBlack,
  height: '50px',
  display: 'flex',
  justifyContent: "center",
  alignItems: "center", 
}

const menuStyle = {
  // flex: "0",
}

const linksStyle = {
  flex: "0",
}

const Header = () =>
  <div style={style}>
    <div style={menuStyle}>
      <HeaderButton message={"Home"} link={"/"} />
      <HeaderButton message={"About"} link={"/about"} />
    </div>
  </div>

export default Header;

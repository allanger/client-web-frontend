import {Colors} from "../consts";

const text = "I am currently working on it, mate"

const panelStyle = {
  backgroundColor: Colors.appleRed,
  width: '100%',
  height: '60px',
}

const linkStyle = {
  color:  Colors.white,
  fontSize: "20px",
}

const Wip = () => 
  <div style={ panelStyle }>
    <p style={linkStyle}>This site is under development</p>
  </div>

export default Wip;

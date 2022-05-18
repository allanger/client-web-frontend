import "./css/header.css"
import {Colors} from "../consts"
import React, {useState} from "react";

const style = {
  backgroundColor: Colors.darkPurple,
  height: '50px',
  padding: '5px',
  margin: '10px 10% 10px 10%',
  flexGrow : 1, 
  justifyContent : 'center'
}

enum Services {
  Mixing,
  Beat,
}


function useForceUpdate() {
  let [value, setState] = useState(true);
  return () => setState(!value);
}

function FeedbackForm() {
  return (
    <div style={style}>
      <form>
        <label>
          What do you want?
          <select>
            <option value="Mixing">Mixing</option>
            <option value="A beat">Beat</option>
          </select>
        </label>
        <label>
          Your Email:
          <input type="text" name="email" />
        </label>
        <label>
          Your Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit  " />
      </form>

    </div>
  )
}

export default FeedbackForm;


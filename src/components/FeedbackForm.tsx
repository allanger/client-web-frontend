import "./css/header.css"
import {Colors} from "../consts"
import React, {useState} from "react";

const style = {
  backgroundColor: Colors.darkPurple,
  padding: '5px',
  margin: '10px 10% 10px 10%',
  flexGrow: 1,
  justifyContent: 'center'
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
        <div>
          <label>
            What do you want?
          </label>
          <select>
            <option value="Mixing">Mixing</option>
            <option value="A beat">Beat</option>
          </select>
        </div>
        <div>
          <label>
            Your Email:
          </label>
            <input type="text" name="email" />
        </div>
        <div>
          <label>
            Your Name:
          </label>
            <input type="text" name="name" />
        </div>
        <div>
          <label>
            Text:
          </label>
            <input type="text" name="name" />
        </div>
        <input type="submit" value="Submit  " />
      </form>
    </div>
  )
}

export default FeedbackForm;


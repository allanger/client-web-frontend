import "./css/header.css"
import { Colors } from "../consts"

const style = {
  backgroundColor: Colors.darkPurple,
  height: '50px',
  padding: '5px',
  margin: '10px 10% 10px 10%',
  display: 'flex',
  justifyContent: 'center',
}

function handleClick() {
  
}

const FeedbackForm = () =>
  <div style={style}>
    <>
      <button onClick={this.handleClick}>Say something</button>
      <Child message={this.state.mssg} />
    </>
    <form>
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

export default FeedbackForm;


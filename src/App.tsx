import { Link } from "react-router-dom";
import HeaderButton from "./components/HeaderButton";
import Header from "./components/Header";
import Wip from "./components/WIP";

export default function App() {
  return (
//    <div>
//      <Header/>
//      <nav
//        style={{
//          background: 'black',
//          height: '50px',
//          width: '100%',
//          borderBottom: "solid 1px",
//          paddingBottom: "1rem",
//        }}
//      >
//        <HeaderButton message={lala}/>
//        <Link to="/about" style={linkStyle}>
//           <button type="button">
//              Click Me!
//           </button>
//        </Link>
//        <Link to="/expenses">Expenses</Link>
//        <Link to="/reviews">Reviews</Link>
//      </nav>
//    </div>
  <div>
    <Wip/>
    <p>Check if it's updated</p>
  </div>
  );
}


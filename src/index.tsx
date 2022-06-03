import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Header from './components/Header'
import Home from './pages/Home';
import WIP from './components/WIP';
const warnStyle = {
  color: 'red',
  margin: '10px 10% 10px 10%',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '20px',
  alignItems: 'center',
}

const linkStyle = {
  display: 'flex',
  justifyContent: 'center',
  fontSize: '20px',
  alignItems: 'center',
}

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="about" element={<About />} />
    </Routes>
    <React.StrictMode>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

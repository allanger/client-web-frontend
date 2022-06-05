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
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import WithSubnavigation from './components/NavBar';
import Main from './pages/Main';
const warnStyle = {
  color: 'red',
  margin: '10px 10% 10px 10%',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '20px',
  alignItems: 'center',
}


const theme = extendTheme({
  colors: {
    brand: "red",
    primary: {
      main: "black",
      50: "#e3f2fd",
      100: "#bbdefb",
      200: "#90caf9",
      300: "#64b5f6",
      400: "#42a5f5",
      500: "#2196f3",
      600: "#1e88e5",
      700: "#1976d2",
      800: "#1565c0",
      900: "#0d47a1"
    },

  }
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      {/* <Header /> */}
      {/* <WithSubnavigation /> */}
      <Main />
      {/* <Routes> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="reviews" element={<Reviews />} /> */}
        {/* <Route path="about" element={<About />} /> */}
      {/* </Routes> */}
      <React.StrictMode>
      </React.StrictMode>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

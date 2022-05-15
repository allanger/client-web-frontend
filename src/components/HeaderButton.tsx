import {Link, NavLink} from "react-router-dom"
import React, {useState} from 'react';
import {State} from "history";
import { Colors } from "../consts";

type AppProps = {
  message: string;
  link: string;
}; /* use `interface` if exporting so that consumers can extend */

const activeStyle = {
  color: Colors.springBud,
  padding: '10px 20px 0px 20px',
  'text-decoration': 'none',
}

const linkStyle = {
  color: Colors.stateGray,
  padding: '10px 20px 0px 20px',
  'text-decoration': 'none',
}

function setStyle(state: any) {
  if (state.isActive) {
    return activeStyle
  } 
  return linkStyle
}
function addUnderline(e: any) {
  e.target.style.textDecoration = 'underline';
}

function removeUnderline(e: any) {
  e.target.style.textDecoration = 'none';
}

function Header(props: AppProps) {
  return (
    <NavLink
      onMouseOver={addUnderline}
      onMouseLeave={removeUnderline}
      to={props.link}
      style={setStyle}
    >
      {props.message}
    </NavLink>
  )
}


export default Header;

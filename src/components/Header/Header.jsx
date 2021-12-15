import React, { Component, Fragment } from "react";
import Nav from "../Nav"
import "./Header.css"

 // Importamos userContext 
 import {userContext} from '../../context/userContext'

class Header extends Component {
  render() {
    return <header className="navbar">
      <Nav />
      {/* Consumo  el context*/}
      <userContext.Consumer>
        {
          ({ user, logout }) => user.name ?
            <>
              <h4>Hola {user.name}</h4>
              <button onClick={logout}>Logout</button>
            </>
            : "" 
        }
      </userContext.Consumer>
    </header>
  }
}

export default Header;

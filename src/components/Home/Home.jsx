import React, { Component } from "react";
 // Importamos userContext (anteriormente ya hemos creado carpeta de context -> userContext)
import {userContext} from '../../context/userContext'
import './Home.css'

class Home extends Component {
  static contextType = userContext  //Adhiere el contexto deseado a la clase 

  constructor(props) {
    super(props)
    this.name = React.createRef(); // crear la referencia
  }

  handleSubmit = event => {
    event.preventDefault();
    const name = this.name.current.value // obtenemos el name 
    // Provider 
    const {login} = this.context
    login(name);  // Seteamos el login con el valor del name 
    this.name.current.value = ""
  }

  render() {
    return <div>
      <h1>Welcome to Api News</h1>
      <p>¿What is your name?</p>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" ref={this.name}/><br/>
        <br />
        <input type="submit" value="Send"/> 
      </form> 
      <img src="https://miro.medium.com/max/1400/1*9MECPZ5wUPS08IWMcqJKiA.png" alt="" id="welcomeImg"/>

    </div>;
  }
}

export default Home;

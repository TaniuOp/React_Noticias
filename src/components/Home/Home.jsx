import React, { Component } from "react";
 // Importamos userContext (anteriormente ya hemos creado carpeta de context -> userContext)
import {userContext} from '../../context/userContext'

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
      <h1>Home</h1>
      <p>¿What is your name?</p>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" ref={this.name}/><br/>
        <input type="submit" value="Send"/> 
      </form> 
    </div>;
  }
}

export default Home;

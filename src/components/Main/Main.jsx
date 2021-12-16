import React, { Component } from "react";
import Home from "../Home"
import Form from "../Form"
import List from "../List"

import {Route, Routes} from 'react-router-dom';
// Para el uso de las rutas 


class Main extends Component {

  constructor(props) {
    super(props)
      //  Enviamos a enviar el estado del array de noticias al hijo (LIST) para que pinte 
    this.state = {
      //  Guardamos el array de objetos de noticias creadas por nosotros (lo que chute FORM) 
      createdNews : [],
    }
  }


  createNews = (title, published_date, byline, abstract) => {
    const newNews = {title, published_date, byline, abstract}
    this.setState({createdNews:[...this.state.createdNews, newNews ]})
  }


  
  render() {
    return <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/form" element={<Form createNews={this.createNews}/>} />
        <Route path="/list" element={<List createdNews={this.state.createdNews}/>} />
      </Routes>
    </div>;
  }
}

export default Main;

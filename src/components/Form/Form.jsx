import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props)
      //  Enviamos a enviar el estado del array de noticias al hijo (LIST) para que pinte 
    this.state = {
      //  Guardamos el array de objetos de noticias creadas por nosotros (lo que chute FORM) 
      data : [],
    }
  }
  // funcion callback 

  handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value
    const published_date = event.target.published_date.value
    const byline = event.target.byline.value
    const abstract = event.target.abstract.value

    this.props.createNews(title,published_date, byline, abstract)
 
  }

  render() {
    return (<div>
      <h1>Create News</h1>
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label><br />
          <input type="text" id="title" name="title" />
          <br />
          <label htmlFor="published_date">Date:</label><br />
          <input type="published_date" id="published_date" name="published_date" />
          <br />
          <label htmlFor="byline">Autor:</label><br />
          <input type="text" id="byline" name="byline" />
          <br />
          <label htmlFor="abstract">Abstract:</label><br />
          <input type="text" id="abstract" name="abstract" />
          <br />
          <br />
          <button><Link to="/list">Add news</Link></button>
        </form>
      </div>
    </div>)
  }
}

export default Form;

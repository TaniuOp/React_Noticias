import React, { Component } from "react";
// const axios = require('axios');

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
    const newsTitle = event.target.newsTitle.value
    console.log(newsTitle);
    const newsDate = event.target.newsDate.value
    const byLine = event.target.byLine.value
    const newsAbstract = event.target.newsAbstract.value
    
    this.props.createNews(newsTitle,newsDate,byLine,newsAbstract)
 
  }

  render() {
    return (<div>
      <h1>News</h1>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="newsTitle">Title:</label><br />
        <input type="text" id="newsTitle" name="newsTitle" />
        <br />
        <label htmlFor="newsDate">Date:</label><br />
        <input type="newsDate" id="newsDate" name="newsDate" />
        <br />
        <label htmlFor="byLine">Autor:</label><br />
        <input type="text" id="byLine" name="byLine" />
        <br />
        <label htmlFor="newsAbstract">Abstract:</label><br />
        <input type="text" id="newsAbstract" name="newsAbstract" />
        <br />
        <br />
        <button>Add news</button>
      </form> 

    </div>)
  }
}

export default Form;

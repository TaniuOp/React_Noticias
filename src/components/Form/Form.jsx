import React, { Component } from "react";
const axios = require('axios');

class Form extends Component {
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
        <label htmlFor="byline">Autor:</label><br />
        <input type="text" id="byline" name="byline" />
        <br />
        <label htmlFor="newsAbstract">Abstract:</label><br />
        <input type="text" id="newsAbstract" name="newsAbstract" />
        <br />
        <label htmlFor="newsImage">Multimedia:</label><br />
        <input type="url" id="newsImage" name="newsImage" />
        <br />
        <br />
        <input type="submit" value="Add news"/> 
      </form> 

    </div>)
  }
}

export default Form;

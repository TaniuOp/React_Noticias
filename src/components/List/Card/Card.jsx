import React, { Component } from "react";
import './Card.css'


class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const {title,published_date, byline, abstract} = this.props.info
    return (
      <div className="container">
        {
          <div className="newsCard">
            <p>Title: {title}</p>
            <p>Date: {published_date}</p>
            <p>Autor:{byline}</p>
            <p>Abstract:{abstract}</p>
            <button onClick={this.props.delete}>Delete</button>
          </div>
        }
      </div>
    );
  }
}
  export default Card;
import React, { Component } from "react";
import './Card.css'
import Button from '@mui/material/Button';

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
            <p>Date: {published_date.substring(0, 10)}</p>
            <p>Autor:{byline}</p>
            <p>Abstract:{abstract}</p>
            {/* <button onClick={this.props.delete}>Delete</button> */}
            <Button onClick={this.props.delete} variant='contained'>Delete</Button>
          </div>
        }
      </div>
    );
  }
}
  export default Card;
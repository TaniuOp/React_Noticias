import React, { Component } from "react";
import Card from "./Card";
const axios = require('axios');

class List extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      nyTimesNews: [],
    }
  }
  
  // Obtenemos la data del NY Times 
  async componentDidMount() {
    const getNewsData = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=YbZWATGOmqymqvj2SGi1yaEuMamc2A8L`);
    console.log(getNewsData.data.results)

    this.setState({
      nyTimesNews: getNewsData.data.results
    })
  }
  render() {
    return (<div>
      <h1>News list</h1>

      <Card news={this.state.nyTimesNews} ></Card>

    </div>)
  }
}

export default List;
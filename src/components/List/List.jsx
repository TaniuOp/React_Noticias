import React, { Component } from "react";
import Card from "./Card";
const axios = require('axios');

class List extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      allTheNews: [],
    }
  }
  
  // Obtenemos la data del NY Times 
  async componentDidMount() {
    
    const getNewsData = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NYKEY}`);
    const nyTimesNews = getNewsData.data.results.slice(0, 5)
    const myNews = nyTimesNews.concat(this.props.createdNews)
    this.setState({
      allTheNews: myNews
    })
  }

  paintNews = () => {
    return this.state.allTheNews.map((news, i) =>  <Card info={news} delete={() => this.deleteOneNews(i)} key={i}/>)
  }

  deleteOneNews = (i) => {
    const news = this.state.allTheNews.filter((news, j) => j !== i)
    this.setState({ allTheNews: news })
  }

  render() {
    return (<div>
      <h1>News list</h1>
      {/* <Card news={this.state.nyTimesNews} ></Card> */}
      {/* Cambiar a funcion que pinte 5 Cards y no que la Card pinte 5 divs */}
      {this.paintNews()}
    </div>)
  }
}

export default List;
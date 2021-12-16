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
    
    const getNewsData = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NYKEY}`);

    this.setState({
      nyTimesNews: getNewsData.data.results.slice(0, 5)
    })
  }

  paintNews = () => {
    return this.state.nyTimesNews.map((news, i) =>  <Card info={news} delete={() => this.deleteOneNews(i)} key={i}/>)
  }

  deleteOneNews = (i) => {
    const news = this.state.nyTimesNews.filter((news, j) => j !== i)
    this.setState({ nyTimesNews: news })
  }

  deleteAllNews = () => {
      this.setState({ nyTimesNews: [] })  //vacía la lista de productList
      alert('Se han eliminado todas la notificas')
  }

  // getData = () => {
  //   this.setState({nyTimesNews: [...this.state.nyTimesNews, this.props.giveData]})
  // }

  render() {
    return (<div>
      <h1>News list</h1>
      {/* <Card news={this.state.nyTimesNews} ></Card> */}
      {/* Cambiar a funcion que pinte 5 Cards y no que la Card pinte 5 divs */}
      {this.paintNews()}

      <button onClick={this.deleteAllNews}>Borrar todos</button>


    </div>)
  }
}

export default List;
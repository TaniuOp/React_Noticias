import React, { Component } from "react";
import Home from "../Home"
import Form from "../Form"
import List from "../List"

import {Route, Routes} from 'react-router-dom';
// Para el uso de las rutas 

const axios = require('axios');

class Main extends Component {

  constructor(props) {
    super(props)
      //  Enviamos a enviar el estado del array de noticias al hijo (LIST) para que pinte 
    this.state = {
      allTheNews: [], //  Array general noticias creadas & obtenidas de NYTmes  
    }
  }

    // Obtenemos la data del NY Times 
    async componentDidMount() {
    
      const getNewsData = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NYKEY}`);
      const nyTimesNews = getNewsData.data.results.slice(0, 5)
      const myNews = nyTimesNews.concat(this.state.allTheNews)
      this.setState({
        allTheNews: myNews
      })
    }

  createNews = (title, published_date, byline, abstract) => {
    const newNews = {title, published_date, byline, abstract}
    this.setState({allTheNews:[...this.state.allTheNews, newNews ]})
  }

  deleteOneNews = (i) => {
    const news = this.state.allTheNews.filter((news, j) => j !== i)
    this.setState({ allTheNews: news })
  }

  
  render() {
    return <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/form" element={<Form createNews={this.createNews}/>} />
        <Route path="/list" element={<List allTheNews={this.state.allTheNews} deleteOneNews={this.deleteOneNews}/>} />
      </Routes>
    </div>;
  }
}

export default Main;
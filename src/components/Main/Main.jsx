import React, { Component } from "react";
import Home from "../Home"
import Form from "../Form"
import List from "../List"

import {Route, Routes} from 'react-router-dom';
// Para el uso de las rutas 

class Main extends Component {
  render() {
    return <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/form" element={<Form/>} />
        <Route path="/list" element={<List/>} />
      </Routes>
    </div>;
  }
}

export default Main;

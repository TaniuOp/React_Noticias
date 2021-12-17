import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

// Importamos BrowserRouter para hacer redirecciones 
import { BrowserRouter} from 'react-router-dom';

// Importamos userContext 
import {userContext} from '../src/context/userContext'


function App() {
  const [user, setUser] = useState({ name: ""}); 
  // Estado de user inicial  --> Provider 
  const login = (name) =>  setUser({ name }) 
  //Set de user = name 
  const logout = () => setUser({ name: "" }) 
  //Set de user = "" 

  const value = {
    user, 
    login,
    logout
  }

  return (
    <div className="App">
      <BrowserRouter>
      <userContext.Provider value={value}>
        <Header />
      <img src={logo} className="App-logo" alt="logo" />
        <Main />
        </userContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;



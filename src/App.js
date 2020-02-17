import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import './Text-styles.css';
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Login from './components/log/Login';
import Register from './components/log/Register';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>

      <Footer />

    </div>
  );
}

export default App;

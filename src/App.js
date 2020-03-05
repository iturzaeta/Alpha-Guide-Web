import React from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import './App.css';
import './Text-styles.css';
import AuthenticatedRoute from './components/other/AuthenticatedRoute'; ////usar para rutas en las que tengas que estar logueado

import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Login from './components/log/Login';
import Register from './components/log/Register';
import Profile from './components/profile/Profile'
import Trip from './components/trip/Tripinfo';

function App() {
  const { pathname } = useLocation()
  const hideFooter = (pathname === '/login' || pathname === '/register')

  return (
    <div className="App">

      <Navbar/>
      
      <div className="main-container">
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/users/:token/validate" component={Login} />
        <AuthenticatedRoute exact path="/profile" component={Profile} />
        <AuthenticatedRoute exact path="/trip/:id" component={Trip} />
      </Switch>
      </div>
      
      {!hideFooter &&  <Footer />}
   
    </div>
  );
}

export default App;

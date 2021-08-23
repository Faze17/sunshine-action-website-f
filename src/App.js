import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Ambassadors from './components/pages/Ambassadors';
import SunshineFourty from './components/pages/SunshineFourty';
import ContactUs from './components/pages/ContactUs';
import LandingPage from './components/pages/LandingPage';



function App() {
  return (
    <>
      <Router>
  
        <Switch>
        <Route path='/' exact component={LandingPage} />
        <div>
        <Navbar />
          <Route path='/home' exact component={Home} />
          <Route path='/fourty-five-club' exact component={SunshineFourty} />
          <Route path='/ambassadors' exact component={Ambassadors} />
          <Route path='/contact-us' exact component={ContactUs} />
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
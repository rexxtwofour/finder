import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router';
import Header from './Components/Header/Header';
import Routes from './routes';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header/> */}
        <Routes/>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default withRouter(App);

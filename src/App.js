import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header/> */}
      
        {/* <Footer/> */}

        <Switch>
        <Route exact path="/" component={MatchFinder}/>
        <Route path="/Registration" component={Registration}/>
        <Route path="/UserProfile" component={UserProfile}/>
        <Route path="/UserSettings" component={UserSettings}/>
        <Route path="/MatchList" component={MatchList}/>
        <Route path="/Settings" component={Settings}/>
        <Route path="/JobMap" component={JobMap}/>
        <Route path="/Messages" component={Messages}/>
        <Route path="/ChatWindow" component={ChatWindow}/>
        </Switch>

       
      </div>
    );
  }
}

export default withRouter(App);

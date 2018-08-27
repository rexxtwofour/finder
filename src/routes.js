import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MatchFinder from './Components/MatchFinder/MatchFinder';
import Registration from './Components/Registration/Registration';
import Profile from './Components/Profile/Profile';
import ProfileSettings from './Components/ProfileSettings/ProfileSettings';
import Matches from './Components/Matches/Matches';
import Settings from './Components/Settings/Settings';
import JobMap from './Components/JobMap/JobMap';
import Messages from './Components/Messages/Messages';
import ChatWindow from './Components/ChatWindow/ChatWindow';

export default class routes extends Component {
    render() {
        return <Switch>
        <Route  exact path="/" component={MatchFinder}/>
        <Route  path="/Registration" component={Registration}/>
        <Route  path="/Profile" component={Profile}/>
        <Route  path="/ProfileSettings" component={ProfileSettings}/>
        <Route  path="/Matches" component={Matches}/>
        <Route  path="/Settings" component={Settings}/>
        <Route  path="/JobMap" component={JobMap}/>
        <Route  path="/Messages" component={Messages}/>
        <Route  path="/ChatWindow" component={ChatWindow}/>
        </Switch>
    }
}

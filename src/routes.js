import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MatchFinder from './Components/MatchFinder/MatchFinder';
import Registration from './Components/Registration/Registration';
import UserProfile from './Components/UserProfile/UserProfile';
import UserSettings from './Components/UserSettings/UserSettings';
import MatchList from './Components/MatchList/MatchList';
import Settings from './Components/Settings/Settings';
import JobMap from './Components/JobMap/JobMap';
import Messages from './Components/Messages/Messages';
import ChatWindow from './Components/ChatWindow/ChatWindow';

export default class Routes extends Component {
    render() {
        return <Switch>
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
    }
}

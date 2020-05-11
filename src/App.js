import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import moment from 'moment-timezone';
import { connect } from 'react-redux';
import RemindersList from './components/Home';
import { addReminder, deleteReminder, clearReminders } from './actions/index.js';

import Home from './components/Home';
import New_Reminder from './components/New_Reminder'
import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/New_Reminder" component={New_Reminder} />
             
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
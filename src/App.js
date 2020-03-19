import React from 'react';
import ReactDOM from 'react-dom';
import './components/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import New_Reminder from './components/New_Reminder.js';
import Navigation from './components/Navigation.js';
import index from './index.html';

class App extends React.Component {
  render() {
    return (      
       <BrowserRouter>
        <div class='Nav_Bar'>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path='/New_Reminder' component={New_Reminder} exact/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
export default App;

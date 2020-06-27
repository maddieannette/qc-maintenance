import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Login from './components/Login';
import Dash from './components/Dash';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';

import '../src/App.css';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/login" component={Login} exact/>
             <Route path="/dash" component={Dash}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
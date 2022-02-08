import React from 'react';
import './App.css';

//Imported packages
import {Route, Switch} from 'react-router-dom';

//Imported components
import { LandingPage, HomePage, TransactionPage } from './Screens/index';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/home' component={HomePage} />
        <Route path='/transaction' component={TransactionPage} />
        <Route path='/' component={LandingPage} exact />
      </Switch>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';

//Imported packages
import {Redirect, Route, Switch} from 'react-router-dom';

//Imported Packages
import {Home, Auth, NewFood, Orders} from './Screens';

function App(props:any) {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/auth' component={Auth} />
        <Route path='/orders' component={Orders} />
        <Route path='/new' component={NewFood} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
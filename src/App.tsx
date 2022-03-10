import React from 'react';
import './App.css';

//Imported packages
import {Redirect, Route, Switch} from 'react-router-dom';

//Imported Packages
import {Home, Foods, Selected, Cart, Checkout} from './Screens';

function App(props:any) {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/foods' component={Foods} />
        <Route path='/selected_food' component={Selected} />
        <Route path='/cart' component={Cart} />
        <Route path='/checkout' component={Checkout} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
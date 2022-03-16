import React, { useEffect } from 'react';
import './App.css';

//Imported packages
import {Redirect, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';

//Imported Packages
import {Home, Auth, NewFood, Orders} from './Screens';
import * as actions from './Redux/actions/actions';

function App(props:any) {

  useEffect(() => {
    props.signup()
  }, [])

  let view = (
    <Switch>
      <Route path='/auth' component={Auth} />
      <Redirect to='/auth' />
    </Switch>
  )

  if(props.token){
    view = (
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/orders' component={Orders} />
        <Route path='/new' component={NewFood} />
        <Redirect to='/' />
      </Switch>
    )
  }

  return (
    <div className="App">
      {view}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return{
    token: state.token
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return{
    init: () => dispatch(actions.init),
    signup: () => dispatch(actions.signUp)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
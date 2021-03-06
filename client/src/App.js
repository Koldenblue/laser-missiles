import React, { useState, useEffect } from 'react';
import { loggedInUser, selectLoggedInUser } from './redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import Login from './components/LoginSignupPages/Login';
import Signup from './components/LoginSignupPages/Signup';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import Home from './components/Home';
import LavaContainer from './components/LavaContainer';
import Landscape from './components/Landscape';
import Laser from './components/Laser';

function App() {
  const dispatch = useDispatch();
  let userInfo = useSelector(selectLoggedInUser);

  // upon route switch, gets user info if already logged in (otherwise redux store state is reset to initial value on page reload)
  useEffect(() => {
    axios.get("/api/userdata").then(({ data }) => {
      if (data) {
        console.log(data)
        dispatch(loggedInUser(data))
      }
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Laser />
            <LavaContainer />
            {/* <Landscape /> */}
          </Route>

          <Route exact path='/home'>
            <Home />
          </Route>

          <Route exact path='/login'>
            <Login />
          </Route>

          <Route exact path='/signup'>
            <Signup />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

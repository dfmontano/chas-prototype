import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import StepOne from './components/stepOne/stepOne'
import StepTwo from './components/stepTwo/stepTwo'

function App() {
  return (
      <div>
          <Switch>
              <Route path="/step-two">
                  <StepTwo/>
              </Route>
              <Route path="/">
                  <StepOne/>
              </Route>
          </Switch>
      </div>
  );
}

export default App;

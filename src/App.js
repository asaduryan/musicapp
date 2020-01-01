import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from './components/Home';

const store = configureStore({
  
})

function App() {
  return (
    <Provider store={store} >
      <Router>
        <Switch>
          <Route path="/example">
            Example component
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

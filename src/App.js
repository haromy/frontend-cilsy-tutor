import React from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/home';
import HomeFunc from './pages/homeFunc';
import AddBooks from './pages/addBooks';
import './app.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={HomeFunc} />
          <Route path='/add' component={AddBooks} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

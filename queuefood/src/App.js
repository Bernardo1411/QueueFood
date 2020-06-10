import React from 'react';
import './App.css';
import Main from './components/main'
import About from './components/About'
import Contact from './components/Contact'
import { Router, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <h1>Hello World!</h1>
          <Router exact to='/' component={Main}/>
          <Router to='/about' component={About}/>
          <Router to='/contact' component={Contact}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;

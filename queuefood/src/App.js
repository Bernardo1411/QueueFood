import React from 'react';
import './App.css';
import Main from './components/main'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar/NavBar'
import SignIn from './components/Logs/SignIn'
import SignUp from './components/Logs/SignUp'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

function App(){
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/signIn' component={SignIn} />
          <Route path='/signUp' component={SignUp}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Main from './components/main'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar/NavBar'
import SignIn from './components/Logs/SignIn'
import SignUp from './components/Logs/SignUp'
import Profile from './components/users/profile'
import Basket from './components/users/basket'
import Footer from './components/footer'
import StoreAccess from './components/store/storeAccess'
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
          <Route path='/profile/:id' component={Profile}/>
          <Route path='/basket/:id' component={Basket}/>
          <Route path='/store' component={StoreAccess}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
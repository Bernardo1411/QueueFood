import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css';
import Main from './components/main'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar/NavBar'
import SignIn from './components/Logs/login/SignIn'
import SignUp from './components/Logs/signUp/signUpToggle'
import Footer from './components/footer'
import asyncComponent from './hoc/asyncComponent/asyncComponent'
import 'bootstrap/dist/css/bootstrap.min.css'

const asyncProfile = asyncComponent(() => {
  return import('./components/users/profile')
})

const asyncBasket = asyncComponent(() => {
  return import('./components/users/basket')
})

const asyncStore = asyncComponent(() => {
  return import('./components/store/storeAccess')
})

class App extends Component {

  render() {
    let routes = (
      <Switch>
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        <Route path='/signIn' component={SignIn} />
        <Route path='/signUp' component={SignUp} />
        <Route exact path='/' component={Main} />
        <Redirect to='/signIn' />
      </Switch>
    )

    if (this.props.isAuth) {
      routes = (
        <Switch>
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/profile/:id' component={asyncProfile} />
          <Route path='/basket/:id' component={asyncBasket} />
          <Route path='/store/:id' component={asyncStore} />
          <Route exact path='/' component={Main} />
          <Redirect to='/' />
        </Switch>
      )
    }

    return (
      <div className="App">
          <Navbar />
          {routes}
          <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.firebase.auth.uid
  }
}

export default connect(mapStateToProps)(App);
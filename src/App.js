import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import OrderPage from './pages/orderpage/orderpage.component.jsx'
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/signInSignUpPage/signInSignUpPage.component';
import {auth} from './firebase/firebase.utils';
import React , { Component } from 'react';


class App extends Component   {
  constructor(){
    super();
      this.state = {
        currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
      return (
      <div className="App">
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/order' component = {OrderPage}/>
        <Route path='/signin' component = {SignInSignUpPage} />
      </Switch>
      </div>
    );
  }
}

export default App;

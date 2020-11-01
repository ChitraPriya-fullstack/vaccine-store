import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route, Redirect} from 'react-router-dom';
import { createStructuredSelector} from 'reselect';

import OrderPage from './pages/orderpage/orderpage.component.jsx'
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/signInSignUpPage/signInSignUpPage.component';
import CheckOutPage from './pages/checkOutPage/checkOut.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import React , { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import {selectCurrentUser} from './redux/user/user.selectors';



class App extends Component   {
  constructor(){
    super();
      this.state = {
        currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      }

      setCurrentUser(userAuth);
    });
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
      return (
      <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/order' component = {OrderPage}/>
        <Route exact path='/checkout' component={CheckOutPage}/>
        <Route path='/signin'
         render={() => this.props.currentUser ? 
        (<Redirect to= '/'/>) : (<SignInSignUpPage/>)}
         />
      </Switch>
      </div>
    );
  }
}
const mapStateToProps  = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps  = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

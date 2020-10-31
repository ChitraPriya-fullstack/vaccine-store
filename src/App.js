import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import OrderPage from './pages/orderpage/orderpage.component.jsx'
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/signInSignUpPage/signInSignUpPage.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import React , { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';


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
        <Route path='/signin' component = {SignInSignUpPage} />
      </Switch>
      </div>
    );
  }
}
const mapDispatchToProps  = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);

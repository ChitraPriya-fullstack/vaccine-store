import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import OrderPage from './pages/orderpage/orderpage.component.jsx'
import Header from './components/header/header.component';

function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/order' component = {OrderPage}/>
    </Switch>
    </div>
  );
}

export default App;

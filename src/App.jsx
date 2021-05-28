import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import Landing from './components/pages/Landing/Landing';
import Login from './components/pages/Login/Login';
import SignUp from './components/pages/SignUp/SignUp';
import Collection from './components/pages/Collection/Collection';
import { isAuthenticated } from './service';
import AddRecord from './components/pages/AddRecord/AddRecord';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {!isAuthenticated() ? <Landing /> : <Redirect to='/collection' />}
        </Route>
        <Route path='/login'>
          {!isAuthenticated() ? <Login /> : <Redirect to='/collection' />}
        </Route>
        <Route path='/signup'>
          {!isAuthenticated() ? <SignUp /> : <Redirect to='/collection' />}
        </Route>
        <Route path='/collection'>
          {isAuthenticated() ? <Collection /> : <Redirect to='/' />}
        </Route>
        <Route path='/add'>
          {isAuthenticated() ? <AddRecord /> : <Redirect to='/' />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

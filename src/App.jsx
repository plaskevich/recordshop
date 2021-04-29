import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Collection from './components/Collection/Collection';
import { isAuthenticated } from './service';

function App() {
  return (
    <>
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
        </Switch>
      </Router>
    </>
  );
}

export default App;

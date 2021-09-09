import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Collection from './pages/Collection/Collection';
import { isAuthenticated } from './service';
import AddRecord from './pages/AddRecord/AddRecord';
import EditRecord from './pages/EditRecord/EditRecord';

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
        <Route path='/edit/:id'>
          {isAuthenticated() ? <EditRecord /> : <Redirect to='/' />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

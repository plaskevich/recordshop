import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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
      <Routes>
        <Route path='/' element= {!isAuthenticated() ? <Landing /> : <Navigate replace to='/collection' />} />
        <Route path='/login' element= {!isAuthenticated() ? <Login /> : <Navigate replace to='/collection' />} />
        <Route path='/signup' element= {!isAuthenticated() ? <SignUp /> : <Navigate replace to='/collection' />} />
        <Route path='/collection' element= {!isAuthenticated() ? <Collection /> : <Navigate replace to='/' />} />
        <Route path='/add' element= {!isAuthenticated() ? <AddRecord /> : <Navigate replace to='/' />} />
        <Route path='/edit/:id' element= {!isAuthenticated() ? <EditRecord /> : <Navigate replace to='/' />} />
      </Routes>
    </Router>
  );
}

export default App;

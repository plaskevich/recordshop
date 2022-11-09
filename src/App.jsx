import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Landing from 'pages/Landing/Landing';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';
import Collection from 'pages/Collection';
import { isAuthenticated } from 'utils';
import AddRecord from 'pages/AddRecord';
// import EditRecord from 'pages/EditRecord';
import ViewRecord from 'pages/ViewRecord';

function App() {
  return (
    <Router>
      <Routes>
        {isAuthenticated}
        <Route
          path='/'
          element={
            isAuthenticated() ? <Navigate to='/collection' /> : <Landing />
          }
        />
        <Route
          path='/login'
          element={
            isAuthenticated() ? <Navigate to='/collection' /> : <Login />
          }
        />
        <Route
          path='/signup'
          element={
            isAuthenticated() ? <Navigate to='/collection' /> : <SignUp />
          }
        />
        <Route
          path='/collection'
          element={!isAuthenticated() ? <Navigate to='/' /> : <Collection />}
        />
        <Route
          path='/add'
          element={!isAuthenticated() ? <Navigate to='/' /> : <AddRecord />}
        />
        <Route
          path='/view/:id'
          element={isAuthenticated() ? <ViewRecord /> : <Navigate to='/' />}
        />
        {/* <Route
          path='/edit/:id'
          element={isAuthenticated() ? <EditRecord /> : <Landing />}
        /> */}
      </Routes>
    </Router>
  );
}

export default App;

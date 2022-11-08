import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from 'pages/Landing/Landing';
import Login from 'pages/Login/Login';
import SignUp from 'pages/SignUp/SignUp';
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
          element={!isAuthenticated() ? <Landing /> : <Collection />}
        />
        <Route
          path='/login'
          element={!isAuthenticated() ? <Login /> : <Collection />}
        />
        <Route
          path='/signup'
          element={!isAuthenticated() ? <SignUp /> : <Collection />}
        />
        <Route
          path='/collection'
          element={isAuthenticated() ? <Collection /> : <Landing />}
        />
        <Route
          path='/add'
          element={isAuthenticated() ? <AddRecord /> : <Landing />}
        />
        <Route
          path='/view/:id'
          element={isAuthenticated() ? <ViewRecord /> : <Landing />}
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

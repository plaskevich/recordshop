import { useSelector } from 'react-redux';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { LoadingSpinner } from '@/components/common/LoadingSpinner/LoadingSpinner';
import AddRecord from '@/pages/AddRecord';
import Collection from '@/pages/Collection';
import EditRecord from '@/pages/EditRecord';
import Landing from '@/pages/Landing/Landing';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';
import ViewRecord from '@/pages/ViewRecord';
import { RootState } from '@/redux/store';

function App() {
  const { token } = useSelector((state: RootState) => state.user);
  const { isLoading } = useSelector((state: RootState) => state.props);
  const isAuthenticated = !!token;

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/collection" /> : <Landing />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/collection" /> : <Login />} />
        <Route path="/signup" element={isAuthenticated ? <Navigate to="/collection" /> : <SignUp />} />
        <Route path="/collection" element={!isAuthenticated ? <Navigate to="/" /> : <Collection />} />
        <Route path="/add" element={!isAuthenticated ? <Navigate to="/" /> : <AddRecord />} />
        <Route path="/view/:id" element={isAuthenticated ? <ViewRecord /> : <Navigate to="/" />} />
        <Route path="/edit/:id" element={isAuthenticated ? <EditRecord /> : <Navigate to="/" />} />
      </Routes>
      {isLoading && <LoadingSpinner />}
    </Router>
  );
}

export default App;

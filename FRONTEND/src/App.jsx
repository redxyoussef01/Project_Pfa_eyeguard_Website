import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Dashboard from './pages/dashboard';
import ListEtudiant from './pages/ListEtudiant';
import ListPers from './pages/ListPers';
import ListProf from './pages/ListProf';
import ListPersonne from './pages/ListPersonne';
import Log from './pages/logsdata';
import Alert from './pages/alertsdata';
import Login from './pages/login';
import CamOne from './pages/CamOne'

const isAuthenticated = () => {
  // Check if the user is authenticated, for example, by checking the presence of a token in local storage
  return localStorage.getItem('token') !== null;
};

const PrivateRoute = ({ element, path }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Dashboard */}
        <Route path="/" element={<PrivateRoute element={<Dashboard />} />} />

        {/* Login */}
        <Route path="login" element={<Login />} />

        {/* Protected Routes */}
        <Route path="listpersonne" element={<PrivateRoute element={<ListPersonne />} />} />
        <Route path="listetudiant" element={<PrivateRoute element={<ListEtudiant />} />} />
        <Route path="listpers" element={<PrivateRoute element={<ListPers />} />} />
        <Route path="listprof" element={<PrivateRoute element={<ListProf />} />} />
        <Route path="log" element={<PrivateRoute element={<Log />} />} />
        <Route path="alert" element={<PrivateRoute element={<Alert />} />} />
        <Route path="camone" element={<PrivateRoute element={<CamOne />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

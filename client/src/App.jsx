// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Diabetes from './pages/Diabetes';
import Heart from './pages/Heart';
import Sidebar from './components/Sidebar';
import MonkeyPox from './pages/MonkeyPox';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('token') ? true : false);

  const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/" />;
  };

  return (
    <>
      <div className='flex'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Login setAuth={setIsAuthenticated} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/diabetes" element={<ProtectedRoute element={<Diabetes />} />} />
          <Route path="/heart" element={<ProtectedRoute element={<Heart />} />} />
          <Route path="/monkeyPox" element={<ProtectedRoute element={<MonkeyPox />} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
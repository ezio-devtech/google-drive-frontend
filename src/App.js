import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import DrivePage from './components/DrivePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/drive" element={<DrivePage />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;

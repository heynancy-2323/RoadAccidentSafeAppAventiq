import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import LoginPage from './pages/LoginPage';
import PublicReport from './pages/PublicReport';
import Dashboard from './pages/Dashboard';
import FieldReport from './pages/FieldReport';
import CaseValidation from './pages/CaseValidation';



const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/public-report" element={<PublicReport />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/field-report" element={<FieldReport />} />
            <Route path="/case-validation" element={<CaseValidation />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import LoginPage from './pages/LoginPage';
import PublicReport from './pages/PublicReport';
import Dashboard from './pages/Dashboard';
import FieldReport from './pages/FieldReport';
import CaseValidation from './pages/CaseValidation';
import CaseManagement from './pages/CaseManagement';
import UserManagement from './pages/UserManagement';
import Analytics from './pages/Analytics';
import Audit from './pages/Audit';
import Messages from './pages/Messages';
import Configuration from './pages/Configuration';



const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="overflow-y-auto">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/public-report" element={<PublicReport />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/field-report" element={<FieldReport />} />
            <Route path="/case-validation" element={<CaseValidation />} />
            <Route path="/case-management" element={<CaseManagement />} />
            <Route path="/user-management" element={<UserManagement/>} />
            <Route path="/analytics" element={<Analytics/>} />
            <Route path="/audit" element={<Audit/>} />
            <Route path="/messages" element={<Messages/>} />
            <Route path='/config' element={<Configuration/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

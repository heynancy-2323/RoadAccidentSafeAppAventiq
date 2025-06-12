import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

// Protected Route component
const ProtectedRoute = ({ children }) => {
  // For now, we'll use a simple localStorage check
  // In a real app, you'd want to use a more secure authentication system
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 h-screen overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

// Public Route with Sidebar component
const PublicRouteWithSidebar = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 h-screen overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/public-report" element={
          <PublicRouteWithSidebar>
            <PublicReport />
          </PublicRouteWithSidebar>
        } />
        
        {/* Protected routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/field-report" element={
          <ProtectedRoute>
            <FieldReport />
          </ProtectedRoute>
        } />
        <Route path="/case-validation" element={
          <ProtectedRoute>
            <CaseValidation />
          </ProtectedRoute>
        } />
        <Route path="/case-management" element={
          <ProtectedRoute>
            <CaseManagement />
          </ProtectedRoute>
        } />
        <Route path="/user-management" element={
          <ProtectedRoute>
            <UserManagement />
          </ProtectedRoute>
        } />
        <Route path="/analytics" element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        } />
        <Route path="/audit" element={
          <ProtectedRoute>
            <Audit />
          </ProtectedRoute>
        } />
        <Route path="/messages" element={
          <ProtectedRoute>
            <Messages />
          </ProtectedRoute>
        } />
        <Route path="/config" element={
          <ProtectedRoute>
            <Configuration />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
};

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import LoginPage from './pages/LoginPage';
// import PublicReport from './pages/PublicReport';
// import Dashboard from './pages/Dashboard';
// import FieldReport from './pages/FieldReport';
// import CaseValidation from './pages/CaseValidation';
// import CaseManagement from './pages/CaseManagement';
// import UserManagement from './pages/UserManagement';
// import Analytics from './pages/Analytics';
// import Audit from './pages/Audit';
// import Messages from './pages/Messages';
// import Configuration from './pages/Configuration';



// const App = () => {
//   return (
//     <Router>
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-1 h-screen overflow-y-auto">
//           <Routes>
//             <Route path="/" element={<LoginPage />} />
//             <Route path="/public-report" element={<PublicReport />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/field-report" element={<FieldReport />} />
//             <Route path="/case-validation" element={<CaseValidation />} />
//             <Route path="/case-management" element={<CaseManagement />} />
//             <Route path="/user-management" element={<UserManagement/>} />
//             <Route path="/analytics" element={<Analytics/>} />
//             <Route path="/audit" element={<Audit/>} />
//             <Route path="/messages" element={<Messages/>} />
//             <Route path='/config' element={<Configuration/>} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;

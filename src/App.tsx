import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Community from './pages/Community'

import AdminLayout from './layouts/AdminLayout'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminCommunications from './pages/admin/AdminCommunications'
import AdminCommunity from './pages/admin/AdminCommunity'
import AdminMemberDetail from './pages/admin/AdminMemberDetail'
import AdminCER from './pages/admin/AdminCER'
import AdminUsers from './pages/admin/AdminUsers'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/community" element={<Community />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="cer" element={<AdminCER />} />
          <Route path="community" element={<AdminCommunity />} />
          <Route path="community/:id" element={<AdminMemberDetail />} />
          <Route path="communications" element={<AdminCommunications />} />
          <Route path="settings/users" element={<AdminUsers />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

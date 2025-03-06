import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuestLayout from './layouts/GuestLayout/GuestLayout';
import DashboardLayout from './layouts/UserLayouts/DashboardLayout';
import { Box } from '@mui/material';

function App() {
  return (
    <Router>
      <Routes>
        {/* Guest Routes */}
        <Route path="/" element={<GuestLayout />} />
        <Route path="/dashboard/profile" element={<DashboardLayout><Box sx={{ color: "red" }}>Profilesdgdsfdsfd
          sdfkmdsfkldsf
          dsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdsfdfdssfdsfdsfsdfdsfdsfds Page</Box></DashboardLayout>} />
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout></DashboardLayout>}>

          <Route path="myvideo" element={<Box>My Videos</Box>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

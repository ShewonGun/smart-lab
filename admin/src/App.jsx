import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllAppoinments from './pages/Admin/AllAppoinments';
import AddTest from './pages/Admin/AddTest';
import TestsList from './pages/Admin/TestsList';
import { DoctorContext } from './context/DoctorContext';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import DoctorAppointment from './pages/Doctor/DoctorAppointment';
import DoctorProfile from './pages/Doctor/DoctorProfile';

const App = () => {
  const {aToken} = useContext(AdminContext)
  const {dToken} = useContext(DoctorContext)

  return aToken || dToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          {/*admin route */}
          <Route path='/' element={<></>}/>
          <Route path='/admin-dashboard' element={<Dashboard/>}/>
          <Route path='/all-appoinments' element={<AllAppoinments/>}/>
          <Route path='/add-doctor' element={<AddTest/>}/>
          <Route path='/test-list' element={<TestsList/>}/>

          {/*doctor route */}
          <Route path='/doctor-dashboard' element={<DoctorDashboard/>}/>
          <Route path='/doctor-appointments' element={<DoctorAppointment/>}/>
          <Route path='/doctor-profile' element={<DoctorProfile/>}/>
        </Routes>
      </div>
    </div>
  ) : (
    <>
     <Login/>
     <ToastContainer/>
    </>
  )
}

export default App
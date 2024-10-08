import { Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/auth/Login'
import Register from './Pages/auth/Register'
import ForgotPassword from './Pages/auth/ForgotPassword'
import Notifications from './Pages/dashboard/Notifications'
import Tasks from './Pages/dashboard/Tasks'
import Calendar from './Pages/dashboard/Calendar'
import Workspaces from './Pages/dashboard/Workspaces'


function App() {

  return (
    <>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/dashboard/notifications' element={<Notifications/>}/>
        <Route path='/dashboard/tasks' element={<Tasks/>}/>
        <Route path='/dashboard/calendar' element={<Calendar/>}/>
        <Route path='/dashboard/workspaces' element={<Workspaces/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/reset-password' element={<ForgotPassword/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App

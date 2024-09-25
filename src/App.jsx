import { Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/auth/Login'

function App() {

  return (
    <>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App

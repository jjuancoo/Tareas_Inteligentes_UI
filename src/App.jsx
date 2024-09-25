import { Routes, Route} from 'react-router-dom'

import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Dashboard from './Pages/Dashboard'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App

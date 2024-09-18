import { Routes, Route} from 'react-router-dom'

import Home from './Pages/Home'
import NotFound from './Pages/NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App

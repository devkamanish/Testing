import { useEffect, useState } from 'react'

import './App.css'
import { fetchUsers } from './service/api'
import { BrowserRouter ,Routes, Route} from 'react-router-dom'
import Login from './pages/Login'

function App() {

  useEffect(()=>{
   fetchUsers()
  },[])
  return (
    <BrowserRouter>
       <Routes>
       </Routes>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Admin from './Pages/Admin/Admin'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Homepage/Homepage'
import Login from './Pages/login/Login'

const App = () => {
  return (
    <main>
      <Navbar/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/admin/*' element={<Admin/>}/>
        </Routes>
    </main>
  )
}

export default App
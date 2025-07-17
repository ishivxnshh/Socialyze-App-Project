import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/HomePage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div className='bg-slate-800 h-screen'>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </div>
  )
}

export default App
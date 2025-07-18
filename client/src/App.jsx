import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/HomePage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
    </Routes>
  )
}

export default App
import React from 'react'
import Navbar from '../components/Navbar.Jsx'
import PostForm from '../components/PostForm.Jsx'
import ShitWall from '../components/ShitWall.Jsx'

const HomePage = () => {
  return (
    <div className='bg-slate-800 h-screen'>
      <Navbar />
      <ShitWall />
      <PostForm />
    </div>
  )
}

export default HomePage
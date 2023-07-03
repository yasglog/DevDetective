import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Author from './components/Author'
import User from './components/User'

const Mainsection = () => {
  return (
    <div >
      
    <Routes>
      <Route path="/" element={<Author></Author>}></Route>
      <Route path="/user" element={<User></User>}></Route>

    </Routes>
    </div>
  )
}

export default Mainsection

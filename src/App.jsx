import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import AiTools from './pages/AiTools'
import Home from './pages/Home'
import Docs from './pages/Docs'
import Cursor from './components/Cursor'

const App = () => {
  return (
    <div>
      <Cursor/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aitools" element={<AiTools/>}/>
        <Route path="/docs" element={<Docs/>}/>
      </Routes>
    </div>
  )
}

export default App

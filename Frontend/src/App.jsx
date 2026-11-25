import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './pages/project'
import Tasks from './pages/task'
import Login from './pages/login'
import './App.css'

function App(){

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


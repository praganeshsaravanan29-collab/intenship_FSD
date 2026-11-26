import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './pages/project'
import Tasks from './pages/task'
import Login from '../src/pages/login'
import Calender from '../src/pages/calender'
import Clients from '../src/pages/clients'
import Settings from '../src/pages/settings'
import Team from '../src/pages/team'
import Dashboard from './pages/dashboard'

import './App.css'

function App(){

  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/calender" elements={<Calender />} />
        <Route path="/clients" elements={<Clients />} />
        <Route path="/settings" elements={<Settings/>} />
        <Route path="/team" elements={<Team/>} />
        <Route path="/Dashboard" elements={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


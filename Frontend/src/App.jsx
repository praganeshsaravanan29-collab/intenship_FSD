import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './pages/project'
import Tasks from './pages/task'
import Login from '../src/pages/login'
import Calender from '../src/pages/calender'
import Clients from '../src/pages/clients'
import Settings from '../src/pages/settings'
import Team from '../src/pages/team'
import Dashboard from './pages/dashboard'
import Registers from '../src/components/registers'
import './App.css'

function App(){

  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/registers" element={<Registers/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


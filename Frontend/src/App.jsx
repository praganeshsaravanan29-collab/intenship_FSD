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
import Admindashboard from './pages/admin.jsx/Admindashboard'
import Adminsettings from '../src/pages/admin.jsx/settings'
import Userdetails from './pages/admin.jsx/userdetails'
import Admin from './pages/admin.jsx/adminlayout'


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
        <Route path="/admin" element={<Admin/>}>
          <Route path="admindashboard" element={<Admindashboard/>} />
          <Route path="settings" element={<Adminsettings/>} />
          <Route path="userdetails" element={<Userdetails/>} />
        
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App


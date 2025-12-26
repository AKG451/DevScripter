import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Projects from './pages/Projects.jsx'
import Signup from './pages/Signup.jsx'
import About from './pages/About.jsx' 
import SignIn from './pages/SignIn' 
import Header from './components/Header.jsx'


export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/dashboard" element={<Dashboard />}></Route>
    <Route path="/projects" element={<Projects />}></Route>
    <Route path="/signup" element={<Signup />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/signin" element={<SignIn />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

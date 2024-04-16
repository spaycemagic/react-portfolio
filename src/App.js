import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
<<<<<<< HEAD
=======
import Contact from './components/Contact'
>>>>>>> ef01bf4048bc9cb0ae80e2ba951d3299f0774719
        
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
<<<<<<< HEAD
        <Route path="about" element={<About />} />   
=======
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />   
>>>>>>> ef01bf4048bc9cb0ae80e2ba951d3299f0774719
      </Route>
    </Routes>
    </>
  )
}

export default App
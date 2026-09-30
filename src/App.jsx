import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SiteLayout from './layouts/SiteLayout'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Experiments from './pages/Experiments'
import BuildLog from './pages/BuildLog'
import Now from './pages/Now'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experiments" element={<Experiments />} />
          <Route path="/build-log" element={<BuildLog />} />
          <Route path="/now" element={<Now />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
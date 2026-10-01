import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import './SiteLayout.css'

function SiteLayout() {
  return (
    <div className="site-layout">
      <Navbar />

      <main className="site-main">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default SiteLayout
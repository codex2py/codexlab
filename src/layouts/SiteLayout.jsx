import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'

import './SiteLayout.css'

function SiteLayout() {
  return (
    <div className="site-layout">
      <Navbar />

      <main className="site-main">
        <Outlet />
      </main>

    </div>
  )
}

export default SiteLayout
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function SiteLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default SiteLayout
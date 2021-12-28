import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/simplebar.css'
import '../../assets/css/materialdesignicons.min.css'
import '../../assets/css/tabler-icons.min.css'
import '../../assets/css/style.min.css'

export default function Dashboard() {
  return (
    <div className="page-wrapper landrick-theme toggled">
      <Navbar />
      <Header />
    </div>
  )
}

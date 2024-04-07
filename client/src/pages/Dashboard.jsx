import React from 'react'


import DashboardBackground from '../components/layout/DashboardBackground'
import DashboardNavigation from '../components/layout/DashboardNavigation'

export default function Dashboard() {

  

  return (

   <div className="bg-slate-400">
     <div><DashboardBackground/></div>
     <div><DashboardNavigation/></div>
   </div>
  )
}

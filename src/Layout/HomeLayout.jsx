import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/HomePage/Header'
import Sidebar from '../components/HomePage/Sidebar'
import NavigationBar from '../components/HomePage/NavigationBar'


const HomeLayout = () => {
  return (
<>
<div className='w-full flex'>
<NavigationBar/>

    <main>
    <Outlet/>
    </main>
 </div>
</>
  )
}

export default HomeLayout
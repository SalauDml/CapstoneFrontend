import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

function bloglayout({children}) {
  return (
    
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}

export default bloglayout
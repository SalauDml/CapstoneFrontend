import React from 'react'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'

function layout({children}) {
  return (
    <>
    <header>
         <Navbar/>
     </header>
     {children}
     <Footer/>
    
    </> 
  )
}

export default layout
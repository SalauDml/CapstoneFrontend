import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

function PropertiesListinglayout({children}) {
  return (
    <body>
      <Navbar/>
        {children}
        <Footer/>
    </body>
    
  )
}

export default PropertiesListinglayout
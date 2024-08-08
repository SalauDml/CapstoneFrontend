import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import './global.css'

function Propertieslayout({children}) {
  return (
        
           <>
           <header>
                <Navbar/>
            </header>
            {children}
           
           </> 
          
    
  )
}

export default Propertieslayout
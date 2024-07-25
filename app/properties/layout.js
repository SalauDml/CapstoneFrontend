import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import './global.css'

function Propertieslayout({children}) {
  return (
    <html>
        <body>
            
            <header>
                <Navbar/>
            </header>
            {children}
        </body>
    </html>
  )
}

export default Propertieslayout
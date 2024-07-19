import React from 'react'
import Buttons from '../Buttons/Buttons'
import styles from './Navbar.module.css'

function Navbar() {
  return (
   <>
   <nav className={styles.nav}>
        <div>Real Estateo</div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>FAQ</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Add Listing</li>
        </ul>
        <Buttons bc = 'white' text = 'Browse Listing'/>
    </nav>
   </>
  )
}

export default Navbar
import React from 'react'
import styles from './Button.module.css'

function Buttons({bc,text}) {
  return (
    <button className= { bc == 'white' ? styles.Buttonw  : styles.Buttont } >{text}</button>
  )
}

export default Buttons
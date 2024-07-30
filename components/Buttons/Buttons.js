import React from 'react'
import styles from './Button.module.css'

function Buttons({type,text}) {
  let cn = ''
  switch(type) {
    case 'nav':
      cn = 'Buttonnav'
      break;
    case 'herotransparent':
      cn ='Buttonherotransparent'
      break;
    case 'listingbutton':
      cn = 'Buttonlisting'
      break;
    case 'footer':
      cn = 'Buttonfooter'
    case 'hero':
      cn = 'Buttonhero'
  
  }

  return (
    <button className= {styles[cn]} >{text}</button>
  )
}

export default Buttons
// navbar button, hero button, listing button
// nav - white bg black text
// hero - one nav, one transparent bg, white text, white border
// listing button - transparent bg black text black border


import React from 'react'
import './Button.css'

function Button() {
  return (
    <div className='Container-1'>
        <div className='Button-1'>
            <div className='Button-3' onClick={()=>window.open("https://drive.google.com/file/d/1YSeOTvbXtnjDw_qQVrvqFztKlLR1z3R8/view?usp=sharing","_blank")}>
              Food Menu
            </div>
        </div>
        <div className='Button-2' onClick={()=>window.open("https://drive.google.com/file/d/1Na_RCHO2NWV-ZXirVFRJF1cQOioUxCn9/view?usp=sharing","_blank")}>
           <div className='Button-3'>
            Drink Menu
           </div> 
        </div>
    </div>
  )
}

export default Button
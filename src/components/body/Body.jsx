import React from 'react'
import './Body.css'

function Body() {
  return (
    <div className='general'>
      <div className='firstSection'>
        <div className='transfEgg'>
            <h1>TITULO</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, porro!
            </p>
            <h4>LEARN MORE</h4>
        </div>
        <div className='egg'>
            <img src='src\assets\desktop\image-transform.jpg' alt='huevo' />
        </div>
      </div>
      <div className='secSection'>
        <div className='cupStand'>
            <img src='src\assets\desktop\image-stand-out.jpg' alt='taza' />
        </div>
        <div className='stand'>
            <h1>TITULO</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, porro!
            </p>
            <h4>LEARN MORE</h4>
        </div>
      <div className='thirdSection'>
            <div className='cherry'>
                <h1>TITULO</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, porro!
                </p>
            </div>
            <div className='orange'>
                <h1>TITULO</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, porro!
                </p>
            </div>
      </div>      
      </div>
    </div>
  )
}

export default Body

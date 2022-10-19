import React from 'react'
import '../Modal/PopUp.css'
import goatee from '../../img/talkbubble-goatee.svg'

const PopUp = () => {
  return (
    <div className='pop-up'>
        <div className="text">
            <div className="talkbubble">
              <strong className='text-in-talkbubble'>Let's Keep in Touch</strong>
              <img src={goatee} alt="" />
            </div>
            <div className='text-center'>
              <h2>Get 20% Off</h2>
              <small>Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient.</small>
            </div>
            <input type="email" className='form-control' placeholder='Enter your email' />
            <button className='btn btn-pink'>SIGN UP NOW</button>
        </div>
    </div>
  )
}

export default PopUp
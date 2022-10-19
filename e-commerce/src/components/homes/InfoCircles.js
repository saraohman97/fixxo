import React from 'react'


const InfoCircles = ({icon, title, text}) => {
  return (
    <div className='info-content'>
      <div className='circle'>
        <img src={icon} alt="" />
      </div>
      <h3>{title}</h3>
      <h6>{text}</h6>
    </div>
  )
}

export default InfoCircles
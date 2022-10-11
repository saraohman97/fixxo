import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='customer-service'>
        <h5>Customer Service</h5>
        <p>Help & FAQs</p>
        <p>Order Lookup</p>
        <p>Shipping & Delivery</p>
        <p>Returns</p>
        <p>Contact Us</p>
      </div>
      <div className='credit-card'>
        <h5>Macy's Credit Card</h5>
        <p>Macy's Card Services</p>
        <p>Pay Your Credit Card Bill</p>
        <p>Cardholder Benefits</p>
        <p>Apply for Macy's Credit Card</p>
      </div>
      <div className='our-stores'>
        <h5>Our Stores</h5>
        <p>Stores & Services</p>
        <p>Locations & Hours</p>
        <p>Store Events</p>
        <p>Catalogs</p>
      </div>
      <div className='app-list'>
        <h5>Macy's App</h5>
        <div className='app-btns'>
          <button className='btn-app'><i class="fa-brands fa-apple"></i><div className='btn-content'><small>Download on the</small><span>App Store</span></div></button>
          <button className='btn-app'><img src="/img/google-play.png" alt="" /><div className='btn-content'><small>GET IT ON</small><span>Google Play</span></div></button>
        
        </div>
        <div className='social-icons'>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-google"></i>
        <i class="fa-brands fa-linkedin"></i>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
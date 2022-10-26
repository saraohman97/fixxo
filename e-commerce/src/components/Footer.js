import React from 'react'
import '../components/Footer.css'
import useWindowDimensions from '../hooks/useWindowWidth'

const Footer = () => {
  const { height, width } = useWindowDimensions();
  return (
    <div className='bg-footer'>
      {width > 768 ?
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
              <button className='btn-app'><i className="fa-brands fa-apple"></i><div className='btn-content'><small>Download on the</small><span>App Store</span></div></button>
              <button className='btn-app'><img src="/img/google-play.png" alt="" /><div className='btn-content'><small>GET IT ON</small><span>Google Play</span></div></button>
            </div>
            <div className='social-icons'>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-google"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>

          </div>

        </div> :
        <div className='footer'>
          <div className='footer-mobile'>

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
          </div>
          <div className='footer-mobile'>

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
                <button className='btn-app'><i className="fa-brands fa-apple"></i><div className='btn-content'><small>Download on the</small><span>App Store</span></div></button>
                <button className='btn-app'><img src="/img/google-play.png" alt="" /><div className='btn-content'><small>GET IT ON</small><span>Google Play</span></div></button>
              </div>
            </div>
          </div>
            <div className='social-icons'>
              <i className="home-page-lower fa-brands fa-facebook-f"></i>
              <i className="home-page-lower fa-brands fa-instagram"></i>
              <i className="home-page-lower fa-brands fa-twitter"></i>
              <i className="home-page-lower fa-brands fa-google"></i>
              <i className="home-page-lower fa-brands fa-linkedin"></i>
            </div>


        </div>
      }
      <div className='bg-c-fixxo'>
        <small className='c-fixxo'>© 2021 Fixxo. All Rights Reserved</small>
      </div>
    </div>
  )
}

export default Footer
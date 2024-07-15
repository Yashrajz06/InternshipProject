import React from 'react'

const Footer = () => {
  return (
    <>
    <div class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-col">
          <h4><i class="ri-capsule-fill"></i>MediCure<sup>+</sup></h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Labtests</a></li>
            <li><a href="#">Your Cart</a></li>
            <li><a href="#">Medicines</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Need help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping and Return Policy</a></li>
            <li><a href="#">Payment Partners</a></li>
            <div class="foot-img-div">
            <li><img id="foot-img" src="google-pay.png" alt=""/></li>
            <li><img id="foot-img" src="visa.png" alt=""/></li>
            <li><img id="foot-img" src="paytm.png" alt=""/></li>
            <li><img id="foot-img" src="amazon-pay.png" alt=""/></li>
          </div>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Our Doctors</a></li>
            <li><a href="#">Schedule an Appointment</a></li>
            <li><a href="#"> Contact Us :+91 2349872349</a></li>  
          </ul>
        </div>
        <div class="footer-col">
          <h4>Follow us on</h4>
          <ul>
            <div class="foot-img-div">
            <li><a href="#"><img src="instagram.png" id="foot-img" alt="instagram"/></a></li>
            <li><a href="#"><img src="facebook.png" id="foot-img" alt="facebook"/></a></li>
            <li><a href="#"> <img src="twitter.png" id="foot-img" alt=""/></a></li>
          </div>  
          </ul>
          <div class="foot-limited">

          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer;
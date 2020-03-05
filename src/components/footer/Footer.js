import React from 'react'
import './Footer.css'
import logo from '../../logo.svg'

const Footer = () => {

  return(
    <div className="footer">

      <div className="container-1">

        <div className="ft-col"> 
          <div className="text">
            <p className="terms-p">About Us</p>
            <p className="terms-p">Contact</p>
            <p className="terms-p">FAQs</p>
          </div>
        </div>
        
        <div className="ft-col">
          <div className="text">
            <p className="terms-p">Alfa Box</p>
            <p className="terms-p">Documentation</p>
            <p className="terms-p">Health</p>
          </div>
          
        </div>

        <div className="logo">
          <img src={logo} alt="logo-alpha-guide"></img>
        </div>

      </div>

      <div className="container-2">
        <div className="terms">
          <p className="terms-p">EN</p>
          <p className="terms-p">Privacy</p>
          <p className="terms-p">Cookies</p>
          <p className="terms-p">Terms & Conditions</p>
          <p className="terms-p">Legal Advise</p>
          <p className="terms-p">Alfaguide</p>
          <i class="ri-youtube-fill icons"></i>
          <i class="ri-twitter-fill icons"></i>
          <i class="ri-facebook-fill icons"></i>
          <i class="ri-instagram-line icons"></i>




        </div>
        
      </div>

      
    </div>
  )

}

export default Footer
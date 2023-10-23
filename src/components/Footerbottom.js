import React from "react";
import { Link } from 'react-router-dom';

export default function Footer(){
    return(
        <div>
        <footer id="footer" className="footer">
          <div className="container footer-top">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-about">
                <Link to="index.html" className="logo d-flex align-items-center">
                  <span>Append</span>
                </Link>
                <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                <div className="social-links d-flex mt-4">
                  <Link to="#"><i className="bi bi-twitter" /></Link>
                  <Link to="#"><i className="bi bi-facebook" /></Link>
                  <Link to="#"><i className="bi bi-instagram" /></Link>
                  <Link to="#"><i className="bi bi-linkedin" /></Link>
                </div>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><Link to="#">Home</Link></li>
                  <li><Link to="#">About us</Link></li>
                  <li><Link to="#">Services</Link></li>
                  <li><Link to="#">Terms of service</Link></li>
                  <li><Link to="#">Privacy policy</Link></li>
                </ul>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><Link to="#">Web Design</Link></li>
                  <li><Link to="#">Web Development</Link></li>
                  <li><Link to="#">Product Management</Link></li>
                  <li><Link to="#">Marketing</Link></li>
                  <li><Link to="#">Graphic Design</Link></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p>United States</p>
                <p className="mt-4"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                <p><strong>Email:</strong> <span>info@example.com</span></p>
              </div>
            </div>
          </div>
          <div className="container copyright text-center mt-4">
            <p>© <span>Copyright</span> <strong className="px-1">Append</strong> <span>All Rights Reserved</span></p>
            <div className="credits">

              Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
            </div>
          </div>
        </footer>
        <Link to="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></Link>
        
        {/* <div id="preloader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div> */}

        </div>
        
    )
}

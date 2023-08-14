// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
            <div className="container">
                <div className="footer-row">
                    <div className="footer-col">
                        <div className="footer-left text-md-start text-center mb-md-0 mb-3">
                            <h7>&copy; 2023 All rights reserved.</h7>
                            <h7>Designed & Developed by: Alchemist Marketing Solutions</h7>
                        </div>
                    </div>
                    <div className="footer-col">
                        <div className="footer-right text-md-end text-center">
                            <img src="assets/Social icons/FB.svg" alt="" className="social-icon" />
                            <img src="assets/Social icons/Twitter.svg" alt="" className="social-icon" />
                            <img src="assets/Social icons/Insta.svg" alt="" className="social-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer
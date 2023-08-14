// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Visitus.css"
const Visitus = () => {
  return (

        <div className="visit-us" id="visit-us">
            <div className="container">
                <div className="visit-us-row">
                    <div className="visit-us-col">
                        <div className="visit-container">
                            <h2 className="centered-heading primaryText">Visit Us</h2>
                            <p className="paragraph secondaryText">Let us help you make your dreams a reality.</p>
                            <div className="visit-us-subContainer">
                                <div className="visit-content">
                                    <img src="assets/Location.svg" className="location-iocn" />
                                    <p className="address secondaryText">
                                        <span style={{ fontWeight: 800 }}>Site Address </span> - Epic-Centre at The Canvas Residences,<br />
                                        Junction of RA Kidwai Road & DG Mahajani Road,<br />
                                        Sewri, Mumbai 400015
                                    </p>
                                    <p className="phone secondaryText">Phone +91 7045203663</p>
                                    <button className="button">Enquire Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="visit-us-col">
                        <div className="text-center">
                            <img src="assets/maplocation.png" alt="Map Image" className="map-image img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
  )
}

export default Visitus
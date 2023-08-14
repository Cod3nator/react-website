// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Connectivity.css"
import ConnectAccordion from '../../utils/connect-accordion/ConnectAccordion'

const Connectivity = () => {
  return (
   <div className="flexColCenter Connectivity">
   
        <div className="Content">
        <div className="flexColCenter">
       <h2 className="primaryText">SEWRI & IT&#39;S EPIC-CENTRE</h2>
       <div className="spaceBox"></div>
  <img src="assets/Colourful Line.svg"/>
  <div className="spaceBox"></div>
   </div>
  </div>
  <div className="wrapper">
        <div className="left-imag">
      <img src="assets/Sewri & Its Epic Centre - Mob.jpg" alt="" />
   
        </div>
        <div className="right-accord">
              <div className=" Accord-wrapper">
              <ConnectAccordion/>
              </div>
        </div>
        </div>
    </div>
   
  )
}

export default Connectivity
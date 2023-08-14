// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Overview.css"
const Overview = () => {
  return (
    <div className="flexColCenter Overview">
        <div className=" none">
          <div className="heading">
            <h3>MUMBAI’S NEW EPIC-CENTRE</h3>
          </div>
            <div className="spaceBox"></div>
            <img src="assets/Colourful Line.svg" alt="Divider Line"/>
             <div className="spaceBox"></div>
            <div className="subPara">Step into a world of luxury and comfort  at Epic-Centre by The Canvas Residences, where your home is not just a place to live, but an experience in itself. Tucked away in the flourishing Eastern hub of Mumbai, Sewri. It boasts stunning vistas of the ocean and the vibrant hues of flamingos in the backdrop.</div>
        </div>
        {/* buttons*/}
        <div className="Button-container">
              <div className=" Overview-buttons">
              <img src="assets/Icons/Epic Center/Off white/0-01.svg" alt="Image" className=" icon image"/>
            <h3 className=" des title">Trans Harbour</h3>
               </div>
               <div className="Overview-buttons">
              <img src="assets/Icons/Epic Center/Off white/0-02.svg" alt="Image" className="icon image"/>
            <h3 className="des title">Monorail</h3>
               </div>
               <div className="Overview-buttons">
              <img src="assets/Icons/Epic Center/Off white/0-03.svg" alt="Image" className="icon image"/>
            <h3 className="des title">Mumbai line 11</h3>
               </div>
               <div className="Overview-buttons">
              <img src="assets/Icons/Epic Center/Off white/0-04.svg" alt="Image" className=" icon image"/>
            <h3 className="des title">Mumbai Port</h3>
               </div>
               <div className="Overview-buttons">
              <img src="assets/Icons/Epic Center/Off white/0-05.svg" alt="Image" className=" icon image"/>
            <h3 className=" des title">Metro Line</h3>
               </div>
        
    </div>
    </div>
  )
}

export default Overview
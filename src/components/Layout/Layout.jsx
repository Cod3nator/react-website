// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Layout.css"
const Layout = () => {
  return (
    <div className="Layout">
          <div className="Content">
          <div className="flexColCenter Content">
<h2 className='primaryText'>Layout</h2>
<div className="spaceBox"></div>
  <img src="assets/Colourful Line.svg" />
  <div className="spaceBox"></div>
  <p className="paragraph">Sewri&#39;s most opulent residences with 2 &amp; 2.5 Bed Residences unit plan</p>
</div>
          </div>
          <div className="flexColCenter wrapper">
          <div className="left-layout">
          <img src="assets/Layout Map.jpg" alt="Layout Image" />
          </div>
          <div className="flexColCenter right-layout">
          <button className="button">Download</button>  
          </div>

          </div>
          
    </div>
  )
}

export default Layout
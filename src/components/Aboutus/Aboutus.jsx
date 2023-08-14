// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./AboutUs.css"
const Aboutus = () => {
  return (
   <div className="AboutUs">
 <div className="flexColCenter Content">
<h2 className='primaryText'>Power of Developers</h2>
<div className="spaceBox"></div>
  <img src="assets/Colourful Line.svg" />
  <div className="spaceBox"></div>
  <p className="paragraph">With a significant part to play in the 158-year journey of Shapoorji Pallonji, we’ve built our reputation by building some of India’s iconic structures that have stood the test of time. SD Corp,
   a joint venture between Shapoorji Pallonji and the Dilip Thacker Group, has completed some of the most well-known real estate developments that have changed Mumbai&#39;s skyline. Shapoorji Pallonji is transforming Sewri with new luxurious residential project. Their commitment to quality and innovation is expected to make Sewri a desirable location to live in.</p>
  </div>
  <div className="row">

  <div className="flexColCenter custom-container">
            <div className="custom-row">
                <div className="custom-col">
                    <div className="circular-image text-center">
                        <img src="assets/THE IMPERIAL TOWERS.png" alt="Developer Image 1" className="img-fluid" />
                        <div className="circular-image-info">THE IMPERIAL TOWERS</div>
                    </div>
                </div>
                <div className="custom-col">
                    <div className="circular-image text-center">
                        <img src="assets/RESERVE BANK.png" alt="Developer Image 2" className="img-fluid" />
                        <div className="circular-image-info">RESERVE BANK</div>
                    </div>
                </div>
                <div className="custom-col">
                    <div className="circular-image text-center">
                        <img src="assets/LILAVATI HOSPITAL.png" alt="Developer Image 3" className="img-fluid" />
                        <h3>LILAVATI HOSPITAL</h3>
                    </div>
                </div>
                <div className="custom-col">
                    <div className="circular-image text-center">
                        <img src="assets/BRABOURNE STADIUM.png" alt="Developer Image 4" className="img-fluid" />
                        <h3>BRABOURNE STADIUM</h3>
                    </div>
                </div>
            </div>
        </div>




  </div>
  </div>
  )
}

export default Aboutus
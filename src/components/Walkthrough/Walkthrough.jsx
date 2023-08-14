// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Walkthrough.css"
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

const Walkthrough = () => {
  return (
   <div className="Walkthrough">
<div className="flexColCenter Content">
<h2 className='primaryText'>360° Degree Walkthrough</h2>
<div className="spaceBox"></div>
  <img src="assets/Colourful Line.svg" />
  <div className="spaceBox"></div>
  <p className="paragraph">Get a glimpse of what your epic future would look like at the Canvas Residences.</p>
</div>
<div className="flexCenter  Container">
  <div className="Holder-image">
  
  <ReactPhotoSphereViewer
// public\assets\pano\viagalactica-DxHR8K5Egjk-unsplash.jpg
        src="assets/pano/viagalactica-DxHR8K5Egjk-unsplash.jpg"
        height={"55vh"}
        width={"100%"}
        littlePlanet={false}
      
      ></ReactPhotoSphereViewer>

  </div>
</div>
  
   </div>
  )
}

export default Walkthrough
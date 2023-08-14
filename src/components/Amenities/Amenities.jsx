// eslint-disable-next-line no-unused-vars
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper/modules';

import data from "./slider.json"


import "./Amenities.css"
const Amenities = () => {
  return (
    <div className=" flexColCenter Amenities ">
     <div className="Content">
     <div className="primaryText">Amenities</div>
     <div className="spaceBox"></div>
       <div className="flexColCenter">
       <img src="assets/Colourful Line.svg" alt="Divider Line"  />
      <div className="spaceBox"></div>
 <p className='subPara'>
   Experience unparalleled luxury residences with a plethora of amenities at the Epic-Centre.
 </p>
        </div>
     </div>
         <div className=" flexColCenter Slider-Container">
     <Swiper navigation={true} modules={[Navigation]} 
      className='swiper'
      spaceBetween={15}
      slidesPerView={3}
      onSwiper={(swiper) => console.log(swiper)}
      >
      {data.map((card,i)=>(
<SwiperSlide key={i} className='swiper-slide '>
       <div className="flexColCenter Holder">
       <img src={card.image} alt="" />
        <span className="secondaryText r-desc">
          {card.desc}
        </span>
       </div>
 </SwiperSlide>
      ))
      }
    </Swiper>
         </div>

    <div className="flexCenter amenities-info">
         <div className="info-wrapper">
         <div className="amenities-info-content">
      <h4>2 & 2.5 Bed Residences</h4>
      </div>
      <div className="amenities-info-content">
        <h4>Near Parel</h4>
        </div>
        <div className="amenities-info-content">
          <h4>Available Units</h4>
          </div>
         <div>
         <button className="button">Request Details</button>
         </div>
         </div>
    </div>
    </div>
  )
}

export default Amenities
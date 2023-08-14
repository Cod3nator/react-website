// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import data from "./auto-slider.json"
import "./Gallery.css"
const Gallery = () => {
  return (
    <div className="Gallery">
       <div className="Content">
        <div className="flexColCenter">
       <h2 className="primaryText">Gallery</h2>
       <div className="spaceBox"></div>
  <img src="assets/Colourful Line.svg"/>
  <div className="spaceBox"></div>
  <p className="paragraph">Where luxurious homes and scenic views meet to create an elevated living experience in the stunning vistas from the comfort of our homes.</p>
  </div>
       </div>

       <div className="Holder">
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          data.map((card,i)=>(
            <SwiperSlide key={i}>
             
                <div className="img-wrapper">
                  <img src={card.image} alt="" />
                         {/* <div className="flexColCenter des">
                       <div className="sub">{card.sub}</div>
                       <div className="des">{card.des}</div>
                </div> */}
                </div>
                
            </SwiperSlide>
          ))
        }
            
      </Swiper>
       </div>
    </div>

  )
}

export default Gallery
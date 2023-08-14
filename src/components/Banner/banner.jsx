// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./banner.css"
const Banner = () => {
  return (
    <div className='Banner '>
        <div className="left flexColCenter">
                    hi
        </div>
        <div className="flexColCenter right">
       
        {/* <div className="form-container"> */}
      <div className=" flexColCenter form-container">
      <h2 className='bannerModal'>Enquire Now</h2>
      <form className="input-form">
        <input type="text" id="name" name="name" placeholder="Name" required />
        <input type="text"  pattern='/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/' id="email" name="email" placeholder="Email" required />
        <div className="mobile-container">
          <input type="text" pattern='[789][0-9]{9}' id="mobile" name="mobile" placeholder="Mobile Number" required />
        </div>
        <label className="checkbox-label">
          <input type="checkbox" name="agreement" required />
          I agree and authorize the team to contact me and/or send relevant data over Email, SMS & WhatsApp.
        </label>
        <button className='button' type="submit">Submit</button>
      </form>
      </div>
      







        </div>
    </div>
  )
}

export default Banner
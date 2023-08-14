// import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header"
import Banner from "./components/Banner/banner"
import Overview from "./components/Overview/Overview"
 import Amenities from "./components/Amenities/Amenities"
import Gallery from "./components/Gallery/Gallery"
import Walkthrough from "./components/Walkthrough/Walkthrough"
import Connectivity from "./components/Connectivity/Connectivity"
import Layout from "./components/Layout/Layout"
import Aboutus from "./components/Aboutus/Aboutus"
import Visitus from "./components/Visitus/Visitus"
import Dis from "./components/Disclaimer/Dis"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
   <>
   <Header />
   {/* <Routes>
        <Route path="/Overview" element={<Overview />} />
        <Route path="/Amenities" element={<Amenities />} />
        <Route path="/Connectivity" element={<Connectivity />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes> */}
   <Banner/>
   <Overview/>
   <Amenities/>
   <Connectivity/>
   <Gallery/>
   <Walkthrough/>
   <Layout/>
   <Aboutus/>
   <Visitus/>
   <Dis/>
   <Footer/>

   
   {/* <Connectivity/> */}
   </>
      
  )
}

export default App

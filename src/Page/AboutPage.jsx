import React from 'react'
import Navbar from "../component/Nave/Nave";
import About from "../component/About/Aboutus";
const AboutPage = () => {
  return (
    <div>
    <div className="  mainContent">
      <div className="pageCon">
        <Navbar />
        <About />
      </div>
    </div>
  </div>
  )
}

export default AboutPage
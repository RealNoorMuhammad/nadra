import React from "react";
import Navbar from "../component/Nave/Nave";
import BrandGuide from "../component/BrandGuide/BrandGuidelines";
const PageBrandGuide = () => {
  return (
    <div>
      <div className="  mainContent">
        <div className="pageCon">
          <Navbar />
          <BrandGuide />
        </div>
      </div>
    </div>
  );
};

export default PageBrandGuide;

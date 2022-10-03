import React from "react";
import Navbar from "../component/Nave/Nave";
import African from "../component/Africain/AfricanCollection";
const PageAfrician = () => {
  return (
    <div className="  mainContent">
      <div className="pageCon">
        <Navbar />
        <African />
      </div>
    </div>
  );
};

export default PageAfrician;

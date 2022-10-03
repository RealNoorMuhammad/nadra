import React from "react";

import Navbar from "../component/Nave/Nave";
import Home from "../component/Home/Home";
const Homepage = () => {
  return (
    <div>
      <div className="  mainContent">
        <div className="pageCon">
          <Navbar />
          <Home />
        </div>
      </div>
    </div>
  );
};

export default Homepage;

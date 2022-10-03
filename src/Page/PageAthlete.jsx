import React from "react";
import Navbar from "../component/Nave/Nave";
import Athlete from "../component/Athlete/AtheleteCollection";
const PageAthlete = () => {
  return (
    <div className="  mainContent">
      <div className="pageCon">
        <Navbar />
        <Athlete />
      </div>
    </div>
  );
};

export default PageAthlete;

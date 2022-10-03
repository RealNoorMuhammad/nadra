import React from "react";
import Queen from "../component/Queen/QueenCollection";
import Navbar from "../component/Nave/Nave";
const PageQueen = () => {
  return (
    <div className="  mainContent">
      <div className="pageCon">
        <Navbar />
        <Queen />
      </div>
    </div>
  );
};

export default PageQueen;

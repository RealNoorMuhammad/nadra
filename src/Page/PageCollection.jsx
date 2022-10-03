import React from 'react'
import Navbar from "../component/Nave/Nave";
import Collection from "../component/Collection/Collections";
const PageCollection = () => {
  return (
    <div>
      <div className="  mainContent">
        <div className="pageCon">
          <Navbar />
          <Collection />
        </div>
      </div>
    </div>
  )
}

export default PageCollection
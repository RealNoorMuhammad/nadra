import React from "react";
import Navbar from "../component/Nave/Nave";
import Contact from "../component/Contact/Contactus";

const ContactPage = () => {
  return (
    <div>
      <div className="  mainContent">
        <div className="pageCon">
          <Navbar />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

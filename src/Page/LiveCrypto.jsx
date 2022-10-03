import React from "react";
import Banner from "../component/Banner/Banner";
import CoinsTable from "../component/CoinsTable";
import Navbar from "../component/Nave/Nave";
import { Grid } from "@mui/material";

const Crypto = () => {
  return (
    <div>
      <div className="  mainContent">
        <div className="pageConss">
          <Navbar />
          <Grid container>
            <Grid md={12} lg={12} xs={12} sm={12}>
              <br />
              <br />
              <p style={{ fontWeight: "500"  , color:"#000"}}>IN THE PAST 24 HRS</p>
              <br />
              <br />
              <h1 style={{ fontWeight: "500"  , color:"#000" }}>Explore Cryptocurrency Markets</h1>
            </Grid>
          </Grid>
          <Banner />
          <br />
          <br />
          <CoinsTable />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Crypto;

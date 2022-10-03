import React from "react";
import { Grid } from "@mui/material";
import ACountup from "./ACountup";
import BCountup from "./BCountup";
import CCountup from "./CCountup";
const Statistic = () => {
  return (
    <div className="container">
      <h1 style={{ justifyContent: "center", textAlign: "center" }}>
        Statistic
      </h1>
      <Grid container spacing={2}>
        <Grid item md={4} lg={4} xs={12} sm={12}>
          <ACountup end={5000} start={1000} />
        </Grid>
        <Grid item md={4} lg={4} xs={12} sm={12}>
          <BCountup end={5000} start={1000} />
        </Grid>
        <Grid item md={4} lg={4} xs={12} sm={12}>
          <CCountup end={5000} start={1000} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Statistic;

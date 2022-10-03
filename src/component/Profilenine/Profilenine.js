import React, { Component } from "react";

import { MDBCard, MDBCardImage } from "mdb-react-ui-kit";
import { Grid } from "@mui/material";

import Asset9 from "../Image/cong.gif";
import Nave from "../Nave/Nave";
export default class Profileone extends Component {
  render() {
    return (
      <div className="  mainContent">
        <div className="pageCon">
          <Nave />
          <br />
          <br />
          <br />
          <Grid container spacing={2}>
            <Grid
              item
              md={12}
              lg={12}
              sm={12}
              xs={12}
              style={{
                justifyContent: "center",
                textAlign: "center",
                display: "flex",
              }}
            >
              <MDBCard
                style={{
                  backgroundColor: "#4343",
                  borderRadius: "20px",
                  width: "350px",
                }}
              >
                <MDBCardImage
                  src={Asset9}
                  style={{ height: "450px" }}
                  position="top"
                  alt="..."
                />
              </MDBCard>
            </Grid>
          </Grid>

          <br />
          <br />

          <Grid container spacing={2}>
            <Grid
              item
              md={12}
              lg={12}
              sm={12}
              xs={12}
              style={{
                justifyContent: "center",
                textAlign: "center",
                display: "flex",
              }}
            >
              <p style={{ color: "#fff", fontSize: "30px", fontWeight: "800" }}>
                Congressman Donald Payne
              </p>
            </Grid>
          </Grid>

          <br />
          <br />

          <Grid container spacing={2}>
            <Grid
              item
              md={12}
              lg={12}
              sm={12}
              xs={12}
              style={{
                justifyContent: "center",
                textAlign: "center",
                display: "flex",
              }}
            >
              <p
                style={{
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "100",
                  padding: "30px",
                }}
              >
                Congressman Donald Payne is an American politician who has been
                the U.S. representative for New Jersey's 10th congressional
                district since 2012. A member of the Democratic Party, Payne
                served as president of the Newark city council from 2010 to
                2012.
              </p>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid
              item
              md={12}
              lg={12}
              sm={12}
              xs={12}
              style={{
                justifyContent: "center",
                textAlign: "center",
                display: "flex",
              }}
            >
              <p
                style={{
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "600",
                  padding: "30px",
                }}
              >
                <a href="#" class="myButton">
                  Buy
                </a>
              </p>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

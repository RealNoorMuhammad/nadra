import React, { Component } from "react";

import { MDBCard, MDBCardImage } from "mdb-react-ui-kit";
import { Grid } from "@mui/material";
import Nave from "../Nave/Nave";
import Asset3 from "../Image/c3.gif";

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
                  src={Asset3}
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
              Dave Muhammad
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
                Dave Muhammad is the director of Affirmation Action for the city
                of Newark. In Dave's capacity he ensures that contract allocations
                and monies reach the residents of Newark. He also serves as the
                liaison between the city of Newark and the Port authority.
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

import React, { Component } from "react";

import { MDBCard, MDBCardImage } from "mdb-react-ui-kit";
import { Grid } from "@mui/material";

import Asset7 from "../Image/c7.gif";
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
                  src={Asset7}
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
                Michael Copeland
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
                Michael Copeland is a graduate of Springfield College and the
                Executive Director of The Sons of Thunder in Hartford, CT.
                Michael has won several awards for his continued community
                service including Spirit of Scouting Ward, Connecticut Rivers
                Council, Community Service Award of the Interdenominational
                Ministerial Alliance, Benjamin E. Mays Community Service Award,
                Pastoral Resources Community Service Award and Windsor Police
                Athletic League Community Service Award.
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

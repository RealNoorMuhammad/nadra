import React, { Component } from "react";

import { MDBCard, MDBCardImage } from "mdb-react-ui-kit";
import { Grid } from "@mui/material";
import Nave from "../Nave/Nave";
import Asset1 from "../Image/c1.gif";

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
                  src={Asset1}
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
                Da'shone Hughey
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
                Da’shone Hughey Is the founder of CODEIT Institute of Technology
                (CIT) and the Blockchain Lab. Da’shone has a Postgraduate
                Certificate in Education Law from the Shepard Broad College of
                Law, a Masters in Degree in Education, M.Ed., and a PMI
                Certification in Project Management. In addition, Mr. Hughey
                completed his studies in Blockchain Technologies at the
                Massachusetts Institute of Technology Sloan School Management
                and has studied abroad at Hebrew University. He was also
                inducted into Marquis Who’s Who in America.
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

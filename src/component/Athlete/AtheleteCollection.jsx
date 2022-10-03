import React, { Component } from "react";
import "../../cit2.css";
import "../../cit.css";
import cit from "../Image/nt.png";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Grid } from "@mui/material";

import Nav from "react-bootstrap/Nav";

import Asset1 from "../Image/muhammad.jpg";
import Asset2 from "../Image/muhammad.jpg";
import Asset3 from "../Image/muhammad.jpg";

export default class Collections extends Component {
  render() {
    return (
      <div>
        <header id="collections" className="jumbotron jumbotron-fluid">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </header>

        <div>
        <div class="mt-4 p-5">
        <Nav
          className="justify-content-center "
          activeKey="/Collections"
          style={{ borderRadius: "20px" }}
        >
        <Nav.Item>
        <Nav.Link
          href="./collections"
          style={{
            color: "#fff",
            borderRadius: "20px",
            fontSize: "100px",
            fontWeight: "500",
          }}
        >
          <span
            style={{
              color: "#fff",
              borderRadius: "20px",
              fontWeight: "500",
              fontSize: "40px",
            }}
          >
            {" "}
            King
          </span>
        </Nav.Link>
      </Nav.Item>
         
          <Nav.Item style={{ borderRadius: "20px" }}>
            <Nav.Link href="/African">
              <span
                style={{
                  color: "#fff",
                  borderRadius: "20px",
                  fontWeight: "500",
                  fontSize: "40px",
                }}
              >
                {" "}
                African Art
              </span>
            </Nav.Link>
          </Nav.Item>
           <Nav.Item style={{ borderRadius: "20px" }}>
            <Nav.Link href="/Queen">
              <span
                style={{
                  color: "#fff",
                  borderRadius: "20px",
                  fontWeight: "500",
                  fontSize: "40px",
                }}
              >
                {" "}
                Queen
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="./Athlete"
              style={{
                color: "#fff",
                borderRadius: "20px",
                fontSize: "100px",
                fontWeight: "500",
              }}
            >
              <span
                style={{
                  color: "#fff",
                  borderRadius: "20px",
                  fontWeight: "500",
                  fontSize: "40px",
                }}
              >
                {" "}
                Athlete
              </span>
            </Nav.Link>
          </Nav.Item>

    
        </Nav>
      </div>

          <div className="container-fluid text-center">
            <img src={cit} width="40%" height='100%' />
            <h2
              style={{ color: "gold", fontWeight: "500" }}
              class="display-4 waviy"
              id="title"
            >
              <span
                style={{ color: "gold", fontWeight: "500", fontSize: "40px" }}
              >
                Athlete{" "}
              </span>
              &nbsp;
              <span
                style={{ color: "gold", fontWeight: "500", fontSize: "40px" }}
              >
                Collection
              </span>
            </h2>

            <br />
          </div>
          <br />
          <div className="container">
            <div className="col-md-12">
              {/* <br></br> */}

              <center>
                <div className="col-md-12">
                  <div>
                    <Grid container spacing={2}>
                      <Grid item lg={4} xs={12} sm={12} md={4} style={{justifyContent:"center" , alignItems:"center" , display:"flex"}}>
                        {" "}
                        <a href="" style={{ textDecoration: "none" }}>
                          <MDBCard
                            style={{
                              backgroundColor: "#4343",
                              borderRadius: "20px",
                              width: "350px",
                            }}
                          >
                            <MDBCardImage
                              src={Asset1}
                              style={{ height: "350px" }}
                              position="top"
                              alt="..."
                            />
                            <MDBCardBody>
                              <MDBCardTitle
                                style={{ color: "gold", borderRadius: "20px" }}
                              >
                                Muhammad
                              </MDBCardTitle>
                              <MDBCardText
                                style={{
                                  color: "#fff",
                                  borderRadius: "20px",
                                  fontSize: "20px",
                                }}
                              >
                                30 . ETH
                              </MDBCardText>
                              <MDBBtn href="#" class="myButton">
                                Buy
                              </MDBBtn>
                            </MDBCardBody>
                          </MDBCard>
                        </a>
                      </Grid>

                      <Grid item lg={4} xs={12} sm={12} md={4} style={{justifyContent:"center" , alignItems:"center" , display:"flex"}}>
                        {" "}
                        <a href="" style={{ textDecoration: "none" }}>
                          <MDBCard
                            style={{
                              backgroundColor: "#4343",
                              borderRadius: "20px",
                              width: "350px",
                            }}
                          >
                            <MDBCardImage
                              src={Asset2}
                              style={{ height: "350px" }}
                              position="top"
                              alt="..."
                            />
                            <MDBCardBody>
                              <MDBCardTitle
                                style={{ color: "gold", borderRadius: "20px" }}
                              >
                                Muhammad
                              </MDBCardTitle>
                              <MDBCardText
                                style={{
                                  color: "#fff",
                                  borderRadius: "20px",
                                  fontSize: "20px",
                                }}
                              >
                                30 . ETH
                              </MDBCardText>
                              <MDBBtn href="#" class="myButton">
                                Buy
                              </MDBBtn>
                            </MDBCardBody>
                          </MDBCard>
                        </a>
                      </Grid>

                      <Grid item lg={4} xs={12} sm={12} md={4} style={{justifyContent:"center" , alignItems:"center" , display:"flex"}}>
                        <a href="" style={{ textDecoration: "none" }}>
                          {" "}
                          <MDBCard
                            style={{
                              backgroundColor: "#4343",
                              borderRadius: "20px",
                              width: "350px",
                            }}
                          >
                            <MDBCardImage
                              src={Asset3}
                              style={{ height: "350px" }}
                              position="top"
                              alt="..."
                            />
                            <MDBCardBody>
                              <MDBCardTitle
                                style={{ color: "gold", borderRadius: "20px" }}
                              >
                                Muhammad
                              </MDBCardTitle>
                              <MDBCardText
                                style={{
                                  color: "#fff",
                                  borderRadius: "20px",
                                  fontSize: "20px",
                                }}
                              >
                                30 . ETH
                              </MDBCardText>
                              <MDBBtn href="#" class="myButton">
                                Buy
                              </MDBBtn>
                            </MDBCardBody>
                          </MDBCard>
                        </a>
                      </Grid>
                    </Grid>
                  </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <center></center>
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

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

import Asset1 from "../Image/c1.gif";
import Asset2 from "../Image/c2.gif";
import Asset3 from "../Image/c3.gif";
import Asset4 from "../Image/c4.gif";
import Asset5 from "../Image/c5.gif";
import Asset6 from "../Image/c6.gif";
import Asset7 from "../Image/c7.gif";
import Asset8 from "../Image/c8.gif";
import Asset9 from "../Image/cong.gif";

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

          <>
          <img src={cit} width="40%" height='100%' />
            <h2
              style={{ color: "gold", fontWeight: "500" }}
              class="display-4 waviy"
              id="title"
            >
              <span
                style={{ color: "gold", fontWeight: "500", fontSize: "40px" }}
              >
                King{" "}
              </span>
              &nbsp;
              <span
                style={{ color: "gold", fontWeight: "500", fontSize: "40px" }}
              >
                Collection
              </span>
            </h2>

            <br />
          </>
          <br />
          <div className="container">
            <div>
              {/* <br></br> */}

              <center>
                <>
                  <div>
                    <Grid container spacing={1}>
                      <Grid
                        item
                        lg={4}
                        xs={12}
                        sm={12}
                        md={4}
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        {" "}
                        <a
                          href="./Profileone"
                          style={{ textDecoration: "none" }}
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
                              style={{ height: "350px" }}
                              position="top"
                              alt="..."
                            />
                            <MDBCardBody>
                              <MDBCardTitle
                                style={{ color: "gold", borderRadius: "20px" }}
                              >
                                Da'shone Hughey
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

                      <Grid
                        item
                        lg={4}
                        xs={12}
                        sm={12}
                        md={4}
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        {" "}
                        <a
                          href="./Profiletwo"
                          style={{ textDecoration: "none" }}
                        >
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
                                Senator Corey Booker
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

                      <Grid
                        item
                        lg={4}
                        xs={12}
                        sm={12}
                        md={4}
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <a
                          href="./Profilethree"
                          style={{ textDecoration: "none" }}
                        >
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
                                Dave Muhammed
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

                      <Grid
                        item
                        lg={4}
                        xs={12}
                        sm={12}
                        md={4}
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <a
                          href="./Profilefour"
                          style={{ textDecoration: "none" }}
                        >
                          {" "}
                          <MDBCard
                            style={{
                              backgroundColor: "#4343",
                              borderRadius: "20px",
                              width: "350px",
                            }}
                          >
                            <MDBCardImage
                              src={Asset4}
                              style={{ height: "350px" }}
                              position="top"
                              alt="..."
                            />
                            <MDBCardBody>
                              <MDBCardTitle
                                style={{ color: "gold", borderRadius: "20px" }}
                              >
                                Mark Mitchell
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
                        </a>{" "}
                      </Grid>

                      <Grid
                        item
                        lg={4}
                        xs={12}
                        sm={12}
                        md={4}
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <a
                          href="./Profilefive"
                          style={{ textDecoration: "none" }}
                        >
                          {" "}
                          <MDBCard
                            style={{
                              backgroundColor: "#4343",
                              borderRadius: "20px",
                              width: "350px",
                            }}
                          >
                            <MDBCardImage
                              src={Asset5}
                              style={{ height: "350px" }}
                              position="top"
                              alt="..."
                            />
                            <MDBCardBody>
                              <MDBCardTitle
                                style={{ color: "gold", borderRadius: "20px" }}
                              >
                                Mayor Ras Baraka
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
                        </a>{" "}
                      </Grid>

                      <Grid
                        item
                        lg={4}
                        xs={12}
                        sm={12}
                        md={4}
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <a
                          href="./Profilesix"
                          style={{ textDecoration: "none" }}
                        >
                          {" "}
                          <MDBCard
                            style={{
                              backgroundColor: "#4343",
                              borderRadius: "20px",
                              width: "350px",
                            }}
                          >
                            <MDBCardImage
                              src={Asset6}
                              style={{ height: "350px" }}
                              position="top"
                              alt="..."
                            />
                            <MDBCardBody>
                              <MDBCardTitle
                                style={{ color: "gold", borderRadius: "20px" }}
                              >
                                Arnold Cuyler
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
                        </a>{" "}
                      </Grid>

                      <Grid
                        item
                        lg={4}
                        xs={12}
                        sm={12}
                        md={4}
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <a
                          href="./Profileseven"
                          style={{ textDecoration: "none" }}
                        >
                          {" "}
                          <MDBCard
                            style={{
                              backgroundColor: "#4343",
                              borderRadius: "20px",
                              width: "350px",
                            }}
                          >
                            <MDBCardImage
                              src={Asset7}
                              style={{ height: "350px" }}
                              position="top"
                              alt="..."
                            />
                            <MDBCardBody>
                              <MDBCardTitle
                                style={{ color: "gold", borderRadius: "20px" }}
                              >
                                Michael Copeland
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
                        </a>{" "}
                      </Grid>

                      <Grid
                        item
                        lg={4}
                        xs={12}
                        sm={12}
                        md={4}
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        {" "}
                        <MDBCard
                          style={{
                            backgroundColor: "#4343",
                            borderRadius: "20px",
                            width: "350px",
                          }}
                        >
                          <MDBCardImage
                            src={Asset8}
                            style={{ height: "350px" }}
                            position="top"
                            alt="..."
                          />
                          <MDBCardBody>
                            <MDBCardTitle
                              style={{ color: "gold", borderRadius: "20px" }}
                            >
                              CEO
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
                      </Grid>
                      <Grid
                        item
                        lg={4}
                        xs={12}
                        sm={12}
                        md={4}
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        {" "}
                        <a
                          href="./Profilenine"
                          style={{ textDecoration: "none" }}
                        >
                          {" "}
                          <MDBCard
                            style={{
                              backgroundColor: "#4343",
                              borderRadius: "20px",
                              width: "350px",
                            }}
                          >
                            <MDBCardImage
                              src={Asset9}
                              style={{ height: "350px" }}
                              position="top"
                              alt="..."
                            />
                            <MDBCardBody>
                              <MDBCardTitle
                                style={{ color: "gold", borderRadius: "20px" }}
                              >
                                Congressman Donald Payne
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
                </>
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

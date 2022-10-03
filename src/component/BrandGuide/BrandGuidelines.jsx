import React, { Component } from "react";

import { Grid } from "@mui/material";

import maps from "../Image/exms.png";

import cit from "../Image/nt.png";

import d from "../Image/hucc.png";
import m from "../Image/mohcc.png";

export default class PageNotFound extends Component {
  render() {
    return (
      <div>
        <br />

        <Grid container style={{ backgroundColor: "" }} className="brandbg">
          <Grid item md={12} lg={12} xs={12} sm={12}>
            <br />
            <br />
            <img src={cit} style={{ width: "50%" }} />
          </Grid>
          <Grid item md={12} lg={12} xs={12} sm={12}>
            <br />
            <p style={{ color: "#fff", fontSize: "70px" }}>
              {" "}
              Evolving the NADRA brand
            </p>
            <br />
            <br />
            <p style={{ color: "#fff", fontSize: "30px" }}>
              NADRA is unlocking the world of Web3 to expand your reach into the
              future
            </p>
            <br />
            <br />
          </Grid>
        </Grid>
        <Grid container style={{ backgroundColor: "#000" }}>
          <Grid item md={12} lg={12} xs={12} sm={12}>
            <div container>
              <p
                style={{
                  color: "#fff",
                  fontSize: "50px",
                  fontWeight: "100",
                  backgroundColor: " rgba(23,24,36,.5)",
                  margin: "50px",
                }}
              >
                <br />
                <br /> Although our brand is evolving,
                <br />
                our <span className="gtext">values remain.</span> Take a closer
                look <br /> at the symbolism inside{" "}
                <span className="gtext">
                  {" "}
                  our new <br /> logo.
                </span>
                <br />
                <br />
                <br />
                <br />{" "}
              </p>
            </div>
          </Grid>
          <Grid item md={12} lg={12} xs={12} sm={12}>
            <div container>
              <img
                src={cit}
                style={{ width: "50%", position: "relative", top: "-200px" }}
              />

              <hr
                style={{
                  color: "rgb(255, 174, 0) ",
                  position: "relative",
                  top: "-100px",
                  height: 1,
                }}
              />
            </div>
          </Grid>

          <Grid item md={12} lg={12} xs={12} sm={12}>
            <div container>
              <br />
              <br />
              <p style={{ color: "#fff", fontSize: "45px", fontWeight: "100" }}>
              Our name reflects our growth
              </p>

              <br />
              <p style={{ color: "#fff", fontSize: "17px", fontWeight: "100" }}>
                We started in 2021 by making blockchain assets easy to secure,
                manage, and <br />
                exchange on the desktop for everyone. Now the story behind our
                brand update will <br /> carry NADRA into the next generation of
                blockchain development.
              </p>
            </div>
          </Grid>
          <Grid item md={12} lg={12} xs={12} sm={12}>
            <div container>
              <br />
              <br />
              <p
                style={{ color: "#fff", fontSize: "25px", fontWeight: "500" }}
              ></p>
            </div>
          </Grid>

          <Grid container spacing={2}>
            <Grid item md={5} lg={5} xs={12} sm={12}>
              <div className="container h">
                <br />
                <br />
                <img src={d} style={{ width: "100px" }} />
                <br />
                <br />
                <p> Da’shone Hughey</p>
                <p> CO FOUNDER & CEO</p>
              </div>
            </Grid>
            <Grid item md={2} lg={2} xs={12} sm={12}>
              <div className="container">
                <br />
                <br />

                <br />
                <br />
                <p> &</p>
                <p> </p>
              </div>
            </Grid>
            <Grid item md={5} lg={5} xs={12} sm={12}>
              <div className="container m">
                <br />
                <br />
                <img src={m} style={{ width: "100px" }} />
                <br />
                <br />
                <p> Mohammed Kateregga</p>
                <p> CO FOUNDER & East Africa Director</p>
              </div>
            </Grid>
            <br />
            <br />
          </Grid>

          <Grid item md={6} lg={6} xs={12} sm={12}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div container>
              <p style={{ color: "#fff", fontSize: "45px", fontWeight: "500" }}>
                <img src={cit} style={{ width: "30%" }} />
              </p>
              <br />
              <p style={{ color: "#fff", fontWeight: "100" }}>
                <p
                  style={{
                    textAlign: "left",
                  }}
                  className="parabrand"
                >
                  {" "}
                  NADRA is dedicated to designing a personalized,
                  <br /> emotional experience. We ensure every detail helps
                  <br /> you secure, manage, and exchange your digital assets.
                  <br />
                  <br />
                </p>
              </p>
            </div>
          </Grid>
          <Grid item md={6} lg={6} xs={12} sm={12}>
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
            <div container>
              <p
                style={{ color: "#fff", fontSize: "45px", fontWeight: "200" }}
              ></p>
            </div>
          </Grid>

          <Grid item md={12} lg={12} xs={12} sm={12}></Grid>
          <Grid item md={8} lg={8} xs={12} sm={12}>
            <div container>
              <p
                style={{ color: "#fff", fontSize: "45px", fontWeight: "200" }}
              ></p>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

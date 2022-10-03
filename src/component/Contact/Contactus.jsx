import React, { Component } from "react";

import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";

import face from "../Image/face.PNG";
import mail from "../Image/mail.PNG";
import twitter from "../Image/twitter.PNG";

export default class PageNotFound extends Component {
  render() {
    return (
      <div className="contactbg">
        <br />
        <br />
        <br />
        <br />

        <br />
        <br />
        <br />
        <br />

        <br />
        <Grid container spacing={2}>
          <Grid item lg={6} xs={12} sm={12} md={6}>
            <div className="container">
              <p style={{ color: "gold", fontSize: "20px", fontWeight: "800" }}>
                GET IN TOUCH WITH US
              </p>
              <br />
              <br />
              <h1
                style={{ color: "#fff", fontSize: "70px", fontWeight: "500" }}
              >
                Contact us
              </h1>
              <br />
              <Divider variant="middle" />
              <br />
              <br />
              <p style={{ color: "#fff", fontSize: "20px", fontWeight: "500" }}>
                NADRA Staff will NEVER ask for sensitive information, <br />
                including passwords, 12-word phrases or private keys. <br />
                Presently, NADRA does not offer support via telephone. <br />
                It is important to note that while numbers listed as "Official{" "}
                <br />
                NADRA Support" are often posted and shared on the internet,{" "}
                <br />
                these are scams attempting to gain access to your funds.
              </p>
            </div>
          </Grid>

          <Grid item lg={6} xs={12} sm={12} md={6}>
          <br/>
          <br/>
            <Grid item lg={12} xs={12} sm={12} md={12}>
              <a href=" https://twitter.com/nadra50735778">
                <img src={twitter} />
              </a>
            </Grid>
            <br />
            <Grid item lg={12} xs={12} sm={12} md={12}>
              <a href="https://www.facebook.com/nadranft">
                <img src={face} />
              </a>
            </Grid>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

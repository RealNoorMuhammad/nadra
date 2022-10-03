import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import nade from "./nt.png";
import Divider from "@mui/material/Divider";

const Footer = () => {
  return (
    <MDBFooter
      bgColor=""
      className="text-center text-lg-start text-muted"
      style={{ borderRadius: " ", backgroundColor: "#000" }}
    >
      <br />
      <hr
      style={{
        color: "rgb(255, 174, 0) ",

        height: 1,
      }}
    />
    <br />
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6
                style={{
                  fontSize: "18px",

                  color: "#fff",
                }}
                className="text-uppercase fw-light mb-4"
              >
                Crypto News
              </h6>

              <a
                href="https://coinmarketcap.com/"
                style={{
                  fontSize: "15px",
                  position: "relative",
                  right: "13px",
                  fontWeight: "100",
                  color: "#fff",
                }}
              >
                Crypto Prices
              </a>
              <p></p>
              <p></p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6
                style={{
                  fontSize: "18px",

                  color: "#fff",
                }}
                className="text-uppercase fw-light mb-4"
              >
                Company
              </h6>
              <a
                href="./Aboutus"
                style={{
                  fontSize: "15px",
                  position: "relative",
                  right: "13px",
                  color: "#fff",
                  fontWeight: "100",
                }}
              >
                About Us{" "}
              </a>
              <br />
              <br />
              <a
                href="./Contactus"
                style={{
                  fontSize: "15px",
                  position: "relative",
                  right: "13px",
                  color: "#fff",
                  fontWeight: "100",
                }}
              >
                Contact Us
              </a>
              <br />
              <br />
              <a
                href="./BrandGuideliness"
                style={{
                  fontSize: "15px",
                  position: "relative",
                  right: "13px",
                  color: "#fff",
                  fontWeight: "100",
                }}
              >
                Brand Guidelines
              </a>
            </MDBCol>

            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6
                style={{
                  fontSize: "18px",

                  color: "#fff",
                }}
                className="text-uppercase fw-light mb-4"
              >
                Subscribe to NADRA
              </h6>

              <p style={{ color: "#fff", fontWeight: "100", fontSize: "15px" }}>
                Sign up to receive our newsletter with updates about your
                wallet.
              </p>
              <a href="#" class="myButtons">
                Sign Me Up
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow>
            <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-4">
              <img src={nade} style={{ height: "70px" }} />
            </MDBCol>
            <MDBCol md="4" lg="4" xl="4" className="mx-auto mb-4">
              <h6
                className=" mb-5"
                style={{
                  color: "#fff",
                  fontWeight: "300",
                  fontSize: "11px",
                  position: "relative",
                  top: "28px",
                  textAlign: "left",
                }}
              >
                Copyright © 2022 , NADRA Life Inc
              </h6>
              <h6
                style={{
                  color: "#fff",
                  fontWeight: "300",
                  fontSize: "10px",
                  position: "relative",
                  top: "-19px",
                  textAlign: "left",
                }}
              >
                NADRA was co-founded by Da'shone Hughey and Mohammad Kateregga.
              </h6>
            </MDBCol>

            <MDBCol md="5" lg="5" xl="5" className="mx-auto mb-md-0 mb-4">
              <div style={{ position: "relative", top: "30px" }}>
                <a href="https://www.facebook.com/nadranft" className="me-4 text-reset">
                  <MDBIcon fab icon="facebook-f" style={{ color: "#fff" }} />
                </a>
                <a href="https://twitter.com/nadra50735778" className="me-4 text-reset">
                  <MDBIcon fab icon="twitter" style={{ color: "#fff" }} />
                </a>
               
                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="instagram" style={{ color: "#fff" }} />
                </a>
            
               
              </div>
              <br />
            </MDBCol>
            <br />
          </MDBRow>
          <br />
        </MDBContainer>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow>
            <MDBCol md="12" lg="12" xl="12" className="mx-auto mb-4">
              <h6
                className="text-uppercase  mb-4"
                style={{ color: "#fff" }}
              ></h6>
            </MDBCol>

            <br />
          </MDBRow>
          <br />
        </MDBContainer>
      </section>
    </MDBFooter>
  );
};

export default Footer;

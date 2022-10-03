import React, { useState } from "react";
import { ethers } from "ethers";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./nt.png";
import logos from "./naa.png";

const Nave = () => {
  // usetstate for storing and retrieving wallet details

  // usetstate for storing and retrieving wallet details
  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });

  // Button handler button for handling a
  // request event for metamask
  const btnhandler = () => {
    // Asking if metamask is already present or not
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };

  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {
    // Requesting balance method
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        // Setting balance
        setdata({
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };

  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address data
    setdata({
      address: account,
    });

    // Setting a balance
    getbalance(account);
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "#000" }}
      >
        <Container>
          <Navbar.Brand href="./">
            <img src={logo} alt="" style={{ width: "120px" }} />
          </Navbar.Brand>
          <Navbar.Brand href="./"></Navbar.Brand>
          <Navbar.Brand href="./"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{position:"relative" , top:"5px"}}>
              <Nav.Link href="#features">
                {" "}
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="./"
                  style={{ fontSize: "18px", fontWeight: "300" }}
                >
                  HOME
                </a>
              </Nav.Link>
              <Nav.Link href="#pricing">
                {" "}
                <a
                  className="nav-link"
                  href="./collections"
                  style={{ fontSize: "18px", fontWeight: "300" }}
                >
                  COLLECTIONS
                </a>
              </Nav.Link>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "300",
                  position: "relative",
                  top: "7px",
                }}
              >
                {" "}
                <NavDropdown title="CRYPTO NEWS">
                  <NavDropdown.Item
                    href="https://coinmarketcap.com/"
                    style={{
                      fontSize: "18px",
                      fontWeight: "300",
                      position: "relative",
                      top: "7px",
                    }}
                  >
                    CRYPTO PRICES
                  </NavDropdown.Item>
                  <br />
                </NavDropdown>
              </span>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "300",
                  position: "relative",
                  top: "7px",
                }}
              >
                {" "}
                <NavDropdown title="COMPANY">
                  <NavDropdown.Item
                    href="./Aboutus"
                    style={{
                      fontSize: "18px",
                      fontWeight: "300",
                      position: "relative",
                      top: "7px",
                    }}
                  >
                    ABOUT US
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="./Contactus"
                    style={{
                      fontSize: "18px",
                      fontWeight: "300",
                      position: "relative",
                      top: "7px",
                    }}
                  >
                    CONTACT US
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="./BrandGuideliness"
                    style={{
                      fontSize: "18px",
                      fontWeight: "300",
                      position: "relative",
                      top: "7px",
                    }}
                  >
                    BRAND GUIDELINES
                  </NavDropdown.Item>
                  <br />
                </NavDropdown>
              </span>
            </Nav>
            <Nav>
              <Nav.Link></Nav.Link>
              <Nav.Link href="#deets"></Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <a className="myButton" onClick={btnhandler}>
                  Connect Wallet
                </a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Nave;

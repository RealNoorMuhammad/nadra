import React, { Component, useRef, useState } from "react";
import { Grid } from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "./ty.css";
// Import Swiper React components

import Asset1 from "../Image/collection1.jpg";
import Asset8 from "../Image/c8.gif";
import Asset2 from "../Image/n1.jpg";
import Asset9 from "../Image/c5.gif";
import Asset3 from "../Image/n2.jpg";
import Asset4 from "../Image/rain.gif";
import Asset5 from "../Image/lady.gif";
import orange from "../Image/orange.gif";
import Bounce from "react-reveal/Bounce";

import slide1 from "../Image/ti1.png";
import slide2 from "../Image/ti2.png";
import slide3 from "../Image/ti3.png";

import img from "../Image/img2.jpg";
import "../../cit2.css";
import "../../cit.css";

import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
export default class Home extends Component {
  render() {
    return (
      <div>
        <header className="jumbotron jumbotron-fluid">
          <div className="container-fluid text-center">
            {/* <img class="round" src="./art/icon.png " > */}

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className=" align-items-center"></div>
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
          <br />
          <br />
          <div>
            {" "}
            <h1 style={{ color: "#fff", fontSize: "60px" }}>NADRA ART</h1>
          </div>
          <center>
            {/* <div role="img" style="background-position:50% 50%;background-image:url('https://citroyal.files.wordpress.com/2022/08/wallpaperflare.com_wallpaper.jpg');">
    
  </div> */}

            <div className="container">
              <Bounce>
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,

                    reverseDirection: false,
                  }}
                  centeredSlides={true}
                  slidesPerView={"auto"}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  modules={[EffectCoverflow, Pagination, Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src={Asset8} style={{ height: "100%" }} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={Asset4} style={{ height: "100%" }} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={Asset9}
                      style={{ height: "100%", width: "65%" }}
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <img src={Asset5} style={{ height: "100%" }} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={orange} style={{ height: "100%" }} />
                  </SwiperSlide>
                </Swiper>
              </Bounce>
            </div>

            <br />
            <br />
            <br />
            <br />
            <div style={{ borderRadius: "50px" }}>
              <Grid container spacing={1}>
                <br />
                <br />
                <Grid lg={4} xs={12} sm={12} md={4}>
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="container">
                    <img
                      className="box up-down"
                      src={slide1}
                      style={{ height: "600px", borderRadius: "20px" }}
                    />
                  </div>
                </Grid>
                <Grid lg={4} xs={12} sm={12} md={4}>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="container">
                    <img
                      className="box up-down"
                      src={slide2}
                      style={{ height: "600px", borderRadius: "20px" }}
                    />
                  </div>
                </Grid>
                <Grid lg={4} xs={12} sm={12} md={4}>
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="container">
                    <img
                      className="box up-down"
                      src={slide3}
                      style={{ height: "600px", borderRadius: "20px" }}
                    />
                  </div>
                </Grid>
              </Grid>
              <br />
              <br />
              <br />
            </div>
            <br />
            <br />
            <br />
            <div className="container">
              <h1 style={{ color: "#fff" }}></h1>
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <h4
                    style={{
                      color: "#fff",
                     
                      fontWeight: "100",
                    }}
                  >
                    Even if you’re just starting out with Bitcoin or
                    cryptocurrencies you would still be able to use this wallet
                    effortlessly. NADRA is the kind of product you “fall in love
                    with” the first time you use it, and that’s quite rare in
                    the cryptocurrency world.
                  </h4>
                </SwiperSlide>
                <SwiperSlide>
                  <h4
                    style={{
                      color: "#fff",
                    
                      fontWeight: "100",
                    }}
                  >
                    Even if you’re just starting out with Bitcoin or
                    cryptocurrencies you would still be able to use this wallet
                    effortlessly. NADRA is the kind of product you “fall in love
                    with” the first time you use it, and that’s quite rare in
                    the cryptocurrency world.
                  </h4>
                </SwiperSlide>
                <SwiperSlide>
                  <h4
                    style={{
                      color: "#fff",
                     
                      fontWeight: "100",
                    }}
                  >
                    Even if you’re just starting out with Bitcoin or
                    cryptocurrencies you would still be able to use this wallet
                    effortlessly. NADRA is the kind of product you “fall in love
                    with” the first time you use it, and that’s quite rare in
                    the cryptocurrency world.
                  </h4>
                </SwiperSlide>
              </Swiper>
            </div>
          </center>
        </div>
      </div>
    );
  }
}

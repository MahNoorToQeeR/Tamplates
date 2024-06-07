import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./img/slider-1.png";
import img2 from "./img/slider-2.png";
import { Button } from "@mui/material";

const SliderComponent = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              height: "750px",
              backgroundColor: "rgb(231, 231, 231)",
              padding: "15px",
            }}
          >
            <div className="col-md-6">
              <h4
                style={{
                  fontSize: "24px",
                  lineHeight: 1,
                  marginBottom: "0px",
                  color: "rgb(71, 71, 71)",
                  fontWeight: "600",
                }}
              >
                New Products
              </h4>
              <h2
                style={{
                  fontSize: "72px",
                  marginTop: "0px",
                  marginBottom: "10px",
                  fontWeight: "700",
                  color: "rgb(33, 33, 33)",
                  fontFamily: "Raleway",
                }}
              >
                Flexible Chair
              </h2>
              <p
                style={{
                  maxWidth: "470px",
                  color: "rgb(71 71 71 / 70%)",
                  fontFamily: "Open Sans",
                }}
              >
                Torem ipsum dolor sit amet, consectetur adipisicing elitsed do
                eiusmo tempor incididunt ut labore et dolore magna
              </p>
              <div  style={{
                  marginTop: "3rem"
                }}>
              <Button className="Cardbtn"
                variant="contained"
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  padding: "17px 36px",
                  borderRadius: "0px",
                  lineHeight: "1",
                  border: " 0px",
                  transition: "all 0.4s ease 0s",
                  fontSize: "16px",
                  fontFamily: "Raleway",
                  fontWeight: "600",
                  color: "rgb(255, 255, 255)",
                  backgroundColor: "rgb(255, 112, 4)",
                  marginTop: "3rem !important",
                }}
              >
                Shop Now
              </Button>
              </div>
            </div>
            <div className="col-md-6">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              height: "750px",
              backgroundColor: "rgb(231, 231, 231)",
              padding: "15px",
            }}
          >
            <div className="col-md-6">
              <h4
                style={{
                  fontSize: "24px",
                  lineHeight: 1,
                  marginBottom: "0px",
                  color: "rgb(71, 71, 71)",
                  fontWeight: "600",
                }}
              >
                Best Seller
              </h4>
              <h2
                style={{
                  fontSize: "72px",
                  marginTop: "0px",
                  marginBottom: "10px",
                  fontWeight: "700",
                  color: "rgb(33, 33, 33)",
                  fontFamily: "Raleway",
                }}
              >
                Creative Sofa
              </h2>
              <p
                style={{
                  maxWidth: "470px",
                  color: "rgb(71 71 71 / 70%)",
                  fontFamily: "Open Sans",
                }}
              >
                Torem ipsum dolor sit amet, consectetur adipisicing elitsed do
                eiusmo tempor incididunt ut labore et dolore magna
              </p>
              <div  style={{
                  marginTop: "3rem"
                }}>
              <Button className="Cardbtn"
                variant="contained"
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  padding: "17px 36px",
                  borderRadius: "0px",
                  lineHeight: "1",
                  border: " 0px",
                  transition: "all 0.4s ease 0s",
                  fontSize: "16px",
                  fontFamily: "Raleway",
                  fontWeight: "600",
                  color: "rgb(255, 255, 255)",
                  backgroundColor: "rgb(255, 112, 4)",
                  marginTop: "3rem !important",
                }}
              >
                Shop Now
              </Button>
              </div>
            </div>
            <div className="col-md-6">
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;

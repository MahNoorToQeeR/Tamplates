import * as React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default function FooterComponent() {
  return (
    <>
      <div
        style={{
          marginTop: "100px",
          backgroundColor: "rgb(47, 51, 58)",
          color: "rgb(255, 255, 255)",
        }}
      >
        <div style={{ paddingTop: "100px", paddingBottom: "100px" }}>
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              columnGap: "155px",
            }}
          >
            <div className="col-lg-4">
              <h4
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                  position: "relative",
                  marginBottom: "15px",
                  letterSpacing: "1.2px",
                  color: "rgb(255, 255, 255)",
                }}
              >
                ABOUT US
              </h4>
              <div>
                <p
                  style={{
                    color: "rgb(255, 255, 255)",
                    fontSize: "14px",
                    maxWidth: "290px",
                    lineHeight: " 24px",
                  }}
                >
                  Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm
                  tempor incididunt ut labor et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud.
                </p>
                <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
                  <li style={{ marginRight: "10px" }}>
                    <FacebookRoundedIcon />
                  </li>
                  <li style={{ marginRight: "10px" }}>
                    <TwitterIcon />
                  </li>
                  <li style={{ marginRight: "10px" }}>
                    <LinkedInIcon />
                  </li>
                  <li style={{ marginRight: "10px" }}>
                    <YouTubeIcon />
                  </li>
                  <li style={{ marginRight: "10px" }}>
                    <InstagramIcon />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <h4 style={{
                fontSize: "15px",
                fontWeight: "500",
                position: "relative",
                marginBottom: "15px",
                letterSpacing: "1.2px",
                color: "rgb(255, 255, 255)",
              }}>INFORMATION</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li
                  style={{
                    marginBottom: "10px",
                    fontSize: "14px",
                    lineHeight: "24px",
                    padding: "0px",
                    color: "rgb(255, 255, 255)",
                    transition: "all 0.4s ease 0s",
                  }}
                >
                  About Us
                </li>
                <li
                  style={{
                    marginBottom: "10px",
                    fontSize: "14px",
                    lineHeight: "24px",
                    padding: "0px",
                    color: "rgb(255, 255, 255)",
                    transition: "all 0.4s ease 0s",
                  }}
                >
                  Manufactures
                </li>
                <li
                  style={{
                    marginBottom: "10px",
                    fontSize: "14px",
                    lineHeight: "24px",
                    padding: "0px",
                    color: "rgb(255, 255, 255)",
                    transition: "all 0.4s ease 0s",
                  }}
                >
                  Tracking Order
                </li>
                <li
                  style={{
                    marginBottom: "10px",
                    fontSize: "14px",
                    lineHeight: "24px",
                    padding: "0px",
                    color: "rgb(255, 255, 255)",
                    transition: "all 0.4s ease 0s",
                  }}
                >
                  Privacy & Policy
                </li>
                <li
                  style={{
                    marginBottom: "10px",
                    fontSize: "14px",
                    lineHeight: "24px",
                    padding: "0px",
                    color: "rgb(255, 255, 255)",
                    transition: "all 0.4s ease 0s",
                  }}
                >
                  Terms & Conditions
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <h4 style={{
                fontSize: "15px",
                fontWeight: "500",
                position: "relative",
                marginBottom: "15px",
                letterSpacing: "1.2px",
                color: "rgb(255, 255, 255)",
              }}>MY ACCOUNT</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li
                  style={{
                    marginBottom: "10px",
                    fontSize: "14px",
                    lineHeight: "24px",
                    padding: "0px",
                    color: "rgb(255, 255, 255)",
                    transition: "all 0.4s ease 0s",
                  }}
                >
                  Login
                </li>
                <li
                  style={{
                    marginBottom: "10px",
                    fontSize: "14px",
                    lineHeight: "24px",
                    padding: "0px",
                    color: "rgb(255, 255, 255)",
                    transition: "all 0.4s ease 0s",
                  }}
                >
                  My Cart
                </li>
                <li
                  style={{
                    marginBottom: "10px",
                    fontSize: "14px",
                    lineHeight: "24px",
                    padding: "0px",
                    color: "rgb(255, 255, 255)",
                    transition: "all 0.4s ease 0s",
                  }}
                >
                  Wishlist
                </li>
                <li
                  style={{
                    marginBottom: "10px",
                    fontSize: "14px",
                    lineHeight: "24px",
                    padding: "0px",
                    color: "rgb(255, 255, 255)",
                    transition: "all 0.4s ease 0s",
                  }}
                >
                  Compare
                </li>
                <li
                  style={{
                    marginBottom: "10px",
                    fontSize: "14px",
                    lineHeight: "24px",
                    padding: "0px",
                    color: "rgb(255, 255, 255)",
                    transition: "all 0.4s ease 0s",
                  }}
                >
                  My Account
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h4 style={{
                fontSize: "15px",
                fontWeight: "500",
                position: "relative",
                marginBottom: "15px",
                letterSpacing: "1.2px",
                color: "rgb(255, 255, 255)",
              }}>NEWSLETTER</h4>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "25ch",
                    // borderColor: "whitesmoke",
                    boxShadow: "black 5px 5px",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Enter E-mail Address"
                  variant="outlined"
                />
              </Box>
              <Button className="Cardbtn"
                variant="contained"
                style={{
                  backgroundColor: "rgb(255, 112, 4)",
                  display:" inline-block",
                  textAlign: "center",
                  padding: "17px 36px",
                  borderRadius: "0px",
                  lineHeight: 1,
                  fontSize: "13px",
                  fontWeight: '600',
                  border: "0px",
                  marginTop: "20px",
                  fontFamily: "Raleway",
                }}
                startIcon={<SendIcon />}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

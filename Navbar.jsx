import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Select,
  MenuItem,
  Box,
  Drawer,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import img from "./img/images_logo.png";
import SliderComponent from "./SliderComponent";
import CardComponent from "./CardComponent";
import TabsComponent from "./TabsComponent";
import FooterComponent from "./FooterComponent";

function Navbar() {
  const [language, setLanguage] = useState("English");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:780px)");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const styles = {
    navBar: { top: AppBar.height },
  };

  return (
    <>
      <Box>
        <div className="container">
          <div style={{ overflow: "hidden" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "rgb(47, 51, 58)",
                padding: "0px 38px",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "300",
                  fontStyle: "italic",
                  color: " rgb(255, 112, 4)",
                  fontFamily: "Raleway",
                }}
              >
                Default Welcome Message
              </p>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={{ color: "white", paddingRight: "15px" }}
                value={language}
                onChange={handleLanguageChange}
              >
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Italian">Italian</MenuItem>
                <MenuItem value="Arabic">Arabic</MenuItem>
              </Select>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "30px 30px",
              }}
            >
              <div>
                <Typography
                  variant="h5"
                  component="div"
                  style={{ flexGrow: 1, display: "flex", alignItems: "center" }}
                >
                  <img src={img} alt="" />
                </Typography>
              </div>
              <div style={{ display: "flex" }}>
                <IconButton color="inherit">
                  <SearchIcon />
                </IconButton>
                <IconButton color="inherit">
                  <AccountCircleIcon />
                </IconButton>
                <IconButton color="inherit">
                  <LocalMallOutlinedIcon />
                </IconButton>
              </div>
            </div>
            <AppBar position="static">
              <Toolbar
                style={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "rgb(47, 51, 58)",
                }}
              >
                {isMobile ? (
                  <>
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      onClick={handleToggle}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Drawer
                      open={drawerOpen}
                      onClose={handleToggle}
                      anchor="left"
                      sx={styles.navBar}
                    >
                      <List>
                        <ListItem button onClick={handleToggle}>
                          <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button onClick={handleToggle}>
                          <ListItemText primary="About" />
                        </ListItem>
                        <ListItem button onClick={handleToggle}>
                          <ListItemText primary="Home Furniture" />
                        </ListItem>
                        <ListItem button onClick={handleToggle}>
                          <ListItemText primary="Office Furniture" />
                        </ListItem>
                        <ListItem button onClick={handleToggle}>
                          <ListItemText primary="Hospital Furniture" />
                        </ListItem>
                        <ListItem button onClick={handleToggle}>
                          <ListItemText primary="Contact" />
                        </ListItem>
                      </List>
                    </Drawer>
                  </>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "30px",
                    }}
                  >
                    <Button
                      to="/home"
                      color="inherit"
                      style={{
                        lineHeight: "60px",
                        letterSpacing: "0.5px",
                        textDecoration: "none",
                        color: "rgb(255, 255, 255)",
                        fontFamily: "Open Sans",
                        fontSize: "14px",
                      }}
                    >
                      Home
                    </Button>
                    <Button
                      to="/about"
                      color="inherit"
                      style={{
                        lineHeight: "60px",
                        letterSpacing: "0.5px",
                        textDecoration: "none",
                        color: "rgb(255, 255, 255)",
                        fontFamily: "Open Sans",
                        fontSize: "14px",
                      }}
                    >
                      About
                    </Button>
                    <Button to="/home-furniture" color="inherit">
                      Home Furniture
                    </Button>
                    <Button to="/office-furniture" color="inherit">
                      Office Furniture
                    </Button>
                    <Button to="/hospital-furniture" color="inherit">
                      Hospital Furniture
                    </Button>
                    <Button to="/contact" color="inherit">
                      Contact
                    </Button>
                  </div>
                )}
              </Toolbar>
            </AppBar>
            <SliderComponent />
            <CardComponent />
            <div
              style={{
                marginBottom: "42px",
                textAlign: "center",
                color: "rgb(33, 33, 33)",
                fontFamily: "Raleway",
              }}
            >
              <h2
                style={{
                  fontSize: "36px",
                  marginBottom: "15px",
                  fontWeight: "700",
                }}
              >
                Our Products
              </h2>
              <p
                style={{
                  maxWidth: "465px",
                  margin: "auto",
                  color: "rgb(71, 71, 71)",
                  fontFamily: "Open Sans",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do
                eiusmo tempor incididunt ut labore
              </p>
            </div>
            <TabsComponent />
            <FooterComponent />
          </div>
        </div>
      </Box>
    </>
  );
}

export default Navbar;

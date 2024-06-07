import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button, Card, CardContent } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import shoppingCard1 from "./img/shoppingCard1.jpeg";
import shoppingCard11 from "./img/11.png";
import shoppingCard12 from "./img/12.png";
import shoppingCard13 from "./img/13.webp";
import shoppingCard14 from "./img/slider-2.png";
import shoppingCard15 from "./img/15.webp";
import shoppingCard16 from "./img/16.webp";
import shoppingCard17 from "./img/17.png";
// import feature_image_1 from "./img/111.jpg";
// import feature_image_2 from "./img/112.jpg";



import feature_image_1 from "./img/feature_image_1.jpg";
import feature_image_2 from "./img/feature_image_2.jpg";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

export default function TabsComponent() {
  const [value, setValue] = React.useState("1");
  const [favorites, setFavorites] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="New Arrival" value="1" />
            <Tab label="Featured" value="2" />
            <Tab label="On Sale" value="3" />
            <Tab label="Tending" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            <div className="col-md-3">
              <Card style={{ backgroundColor: "#9e9e9e26" }}>
                <CardContent>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div className="heartIcon"
                      style={{
                        display: "flex",
                        webkitBoxAlign: "center",
                        alignItems: "center",
                        webkitBoxPack: "center",
                        justifyContent: "center",
                        width: "40px",
                        height: "40px",
                        transition: "all 0.4s ease 0s",
                        textDecoration: "none",
                        color: "rgb(33, 33, 33)",
                        borderRadius: "50%",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    >
                      <FavoriteBorderIcon style={{ fontSize: "20px" }} />
                    </div>
                  </div>
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      overflow: "hidden",
                      margin: "auto",
                    }}
                  >
                    <img
                      src={shoppingCard11}
                      alt="Sofa"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div className="Btn">
                    <Button className="Cardbtn"
                      style={{
                        backgroundColor: "rgb(255, 112, 4)",
                        colo: "rgb(255, 255, 255)",
                      }}
                      onClick={() => addToFavorites("Item")}
                      variant="contained"
                    >
                      Add to Favorites
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-3">
              <Card style={{ backgroundColor: "#9e9e9e26" }}>
                <CardContent>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div className="heartIcon"
                      style={{
                        display: "flex",
                        webkitBoxAlign: "center",
                        alignItems: "center",
                        webkitBoxPack: "center",
                        justifyContent: "center",
                        width: "40px",
                        height: "40px",
                        transition: "all 0.4s ease 0s",
                        textDecoration: "none",
                        color: "rgb(33, 33, 33)",
                        borderRadius: "50%",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    >
                      <FavoriteBorderIcon style={{ fontSize: "20px" }} />
                    </div>
                  </div>
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      overflow: "hidden",
                      margin: "auto",
                    }}
                  >
                    <img
                      src={shoppingCard12}
                      alt="Sofa"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div className="Btn">
                    <Button className="Cardbtn"
                      style={{
                        backgroundColor: "rgb(255, 112, 4)",
                        colo: "rgb(255, 255, 255)",
                      }}
                      onClick={() => addToFavorites("Item")}
                      variant="contained"
                    >
                      Add to Favorites
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-3">
              <Card style={{ backgroundColor: "#9e9e9e26" }}>
                <CardContent>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div className="heartIcon"
                      style={{
                        display: "flex",
                        webkitBoxAlign: "center",
                        alignItems: "center",
                        webkitBoxPack: "center",
                        justifyContent: "center",
                        width: "40px",
                        height: "40px",
                        transition: "all 0.4s ease 0s",
                        textDecoration: "none",
                        color: "rgb(33, 33, 33)",
                        borderRadius: "50%",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    >
                      <FavoriteBorderIcon style={{ fontSize: "20px" }} />
                    </div>
                  </div>
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      overflow: "hidden",
                      margin: "auto",
                    }}
                  >
                    <img
                      src={shoppingCard13}
                      alt="Sofa"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div className="Btn">
                    <Button className="Cardbtn"
                      style={{
                        backgroundColor: "rgb(255, 112, 4)",
                        colo: "rgb(255, 255, 255)",
                      }}
                      onClick={() => addToFavorites("Item")}
                      variant="contained"
                    >
                      Add to Favorites
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-3">
              <Card style={{ backgroundColor: "#9e9e9e26" }}>
                <CardContent>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div className="heartIcon"
                      style={{
                        display: "flex",
                        webkitBoxAlign: "center",
                        alignItems: "center",
                        webkitBoxPack: "center",
                        justifyContent: "center",
                        width: "40px",
                        height: "40px",
                        transition: "all 0.4s ease 0s",
                        textDecoration: "none",
                        color: "rgb(33, 33, 33)",
                        borderRadius: "50%",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    >
                      <FavoriteBorderIcon style={{ fontSize: "20px" }} />
                    </div>
                  </div>
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      overflow: "hidden",
                      margin: "auto",
                    }}
                  >
                    <img
                      src={shoppingCard14}
                      alt="Sofa"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div className="Btn">
                    <Button className="Cardbtn"
                      style={{
                        backgroundColor: "rgb(255, 112, 4)",
                        colo: "rgb(255, 255, 255)",
                      }}
                      onClick={() => addToFavorites("Item")}
                      variant="contained"
                    >
                      Add to Favorites
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "15px",
            }}
          >
            <div className="col-md-3">
              <Card style={{ backgroundColor: "#9e9e9e26" }}>
                <CardContent>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div className="heartIcon"
                      style={{
                        display: "flex",
                        webkitBoxAlign: "center",
                        alignItems: "center",
                        webkitBoxPack: "center",
                        justifyContent: "center",
                        width: "40px",
                        height: "40px",
                        transition: "all 0.4s ease 0s",
                        textDecoration: "none",
                        color: "rgb(33, 33, 33)",
                        borderRadius: "50%",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    >
                      <FavoriteBorderIcon style={{ fontSize: "20px" }} />
                    </div>
                  </div>
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      overflow: "hidden",
                      margin: "auto",
                    }}
                  >
                    <img
                      src={shoppingCard15}
                      alt="Sofa"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div className="Btn">
                    <Button className="Cardbtn"
                      style={{
                        backgroundColor: "rgb(255, 112, 4)",
                        colo: "rgb(255, 255, 255)",
                      }}
                      onClick={() => addToFavorites("Item")}
                      variant="contained"
                    >
                      Add to Favorites
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-3">
              <Card style={{ backgroundColor: "#9e9e9e26" }}>
                <CardContent>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div className="heartIcon"
                      style={{
                        display: "flex",
                        webkitBoxAlign: "center",
                        alignItems: "center",
                        webkitBoxPack: "center",
                        justifyContent: "center",
                        width: "40px",
                        height: "40px",
                        transition: "all 0.4s ease 0s",
                        textDecoration: "none",
                        color: "rgb(33, 33, 33)",
                        borderRadius: "50%",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    >
                      <FavoriteBorderIcon style={{ fontSize: "20px" }} />
                    </div>
                  </div>
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      overflow: "hidden",
                      margin: "auto",
                    }}
                  >
                    <img
                      src={shoppingCard16}
                      alt="Sofa"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div className="Btn">
                    <Button className="Cardbtn"
                      style={{
                        backgroundColor: "rgb(255, 112, 4)",
                        colo: "rgb(255, 255, 255)",
                      }}
                      onClick={() => addToFavorites("Item")}
                      variant="contained"
                    >
                      Add to Favorites
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-3">
              <Card style={{ backgroundColor: "#9e9e9e26" }}>
                <CardContent>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div className="heartIcon"
                      style={{
                        display: "flex",
                        webkitBoxAlign: "center",
                        alignItems: "center",
                        webkitBoxPack: "center",
                        justifyContent: "center",
                        width: "40px",
                        height: "40px",
                        transition: "all 0.4s ease 0s",
                        textDecoration: "none",
                        color: "rgb(33, 33, 33)",
                        borderRadius: "50%",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    >
                      <FavoriteBorderIcon style={{ fontSize: "20px" }} />
                    </div>
                  </div>
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      overflow: "hidden",
                      margin: "auto",
                    }}
                  >
                    <img
                      src={shoppingCard17}
                      alt="Sofa"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div className="Btn">
                    <Button className="Cardbtn"
                      style={{
                        backgroundColor: "rgb(255, 112, 4)",
                        colo: "rgb(255, 255, 255)",
                      }}
                      onClick={() => addToFavorites("Item")}
                      variant="contained"
                    >
                      Add to Favorites
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-3">
              <Card style={{ backgroundColor: "#9e9e9e26" }}>
                <CardContent>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div className="heartIcon"
                      style={{
                        display: "flex",
                        webkitBoxAlign: "center",
                        alignItems: "center",
                        webkitBoxPack: "center",
                        justifyContent: "center",
                        width: "40px",
                        height: "40px",
                        transition: "all 0.4s ease 0s",
                        textDecoration: "none",
                        color: "rgb(33, 33, 33)",
                        borderRadius: "50%",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    >
                      <FavoriteBorderIcon style={{ fontSize: "20px" }} />
                    </div>
                  </div>
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      overflow: "hidden",
                      margin: "auto",
                    }}
                  >
                    <img
                      src={shoppingCard1}
                      alt="Sofa"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div className="Btn">
                    <Button className="Cardbtn"
                      style={{
                        backgroundColor: "rgb(255, 112, 4)",
                        colo: "rgb(255, 255, 255)",
                      }}
                      onClick={() => addToFavorites("Item")}
                      variant="contained"
                    >
                      Add to Favorites
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div
            className="row"
            style={{
              display: "flex",
              margin: "auto",
              gap: "15px",
              justifyContent: "center",
              paddingBottom: "100px",
              paddingTop: "100px",
            }}
          >
            <div className="col-6">
              <img src={feature_image_1} alt="" />
            </div>
            <div className="col-6">
              <img src={feature_image_2} alt="" />
            </div>
          </div>
          <div
            style={{
              marginBottom: "52px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontSize: "36px",
                marginBottom: "15px",
                fontWeight: "700",
              }}
            >
              Latest News
            </h3>
            <p
              style={{
                margin: "auto",
                color: "rgb(71, 71, 71)",
                fontWeight: "500",
                fontFamily: "Open Sans",
                width: "405px"
              }}
            >
              Torem ipsum dolor sit amet, consectetur adipisicing elitsed do
              eiusmo tempor incididunt ut labore
            </p>
          </div>
          <div style={{textAlign: "center"}}>
          <h3 style={{
              fontSize: "1.75rem",
              marginBottom: "0.5rem",
              fontFamily: "inherit",
              fontWeight: "500",
              lineHeight: "1.1",
              color: "inherit",
              marginTop: "0px"
            }}>There are no articles found!</h3>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div className="row" style={{ marginTop: "100px" }}>
            
            <div className="col-12">
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <LocalMallOutlinedIcon
                  style={{ fontSize: "100px", color: "rgb(255, 112, 4)" }}
                />
                <h2
                  style={{
                    fontSize: "20px",
                    color: "rgb(33, 33, 33)",
                    margintop: "15px",
                    fontWeight: "600",
                    fontFamily: "Raleway",
                  }}
                >
                  There are no products!
                </h2>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{
              display: "flex",
              margin: "auto",
              gap: "15px",
              justifyContent: "center",
              paddingTop: "100px",
              paddingBottom: "100px"
            }}
          >
            <div className="col-6">
              <img src={feature_image_1} alt="" />
            </div>
            <div className="col-6">
              <img src={feature_image_2} alt="" />
            </div>
          </div>
          <div
            style={{
              marginBottom: "52px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontSize: "36px",
                marginBottom: "15px",
                fontWeight: "700",
              }}
            >
              Latest News
            </h3>
            <p
              style={{
                margin: "auto",
                color: "rgb(71, 71, 71)",
                fontWeight: "500",
                fontFamily: "Open Sans",
                width: "405px"
              }}
            >
              Torem ipsum dolor sit amet, consectetur adipisicing elitsed do
              eiusmo tempor incididunt ut labore
            </p>
          </div>
          <div style={{textAlign: "center"}}>
          <h3 style={{
              fontSize: "1.75rem",
              marginBottom: "0.5rem",
              fontFamily: "inherit",
              fontWeight: "500",
              lineHeight: "1.1",
              color: "inherit",
              marginTop: "0px"
            }}>There are no articles found!</h3>
          </div>
        </TabPanel>
        <TabPanel value="3">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "15px",
            }}
          >
            <div className="col-md-3">
              <Card style={{ backgroundColor: "#9e9e9e26" }}>
                <CardContent>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div className="heartIcon"
                      style={{
                        display: "flex",
                        webkitBoxAlign: "center",
                        alignItems: "center",
                        webkitBoxPack: "center",
                        justifyContent: "center",
                        width: "40px",
                        height: "40px",
                        transition: "all 0.4s ease 0s",
                        textDecoration: "none",
                        color: "rgb(33, 33, 33)",
                        borderRadius: "50%",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    >
                      <FavoriteBorderIcon style={{ fontSize: "20px" }} />
                    </div>
                  </div>
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      overflow: "hidden",
                      margin: "auto",
                    }}
                  >
                    <img
                      src={shoppingCard12}
                      alt="Sofa"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div className="Btn">
                    <Button className="Cardbtn"
                      style={{
                        backgroundColor: "rgb(255, 112, 4)",
                        colo: "rgb(255, 255, 255)",
                      }}
                      onClick={() => addToFavorites("Item")}
                      variant="contained"
                    >
                      Add to Favorites
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-3">
              <Card style={{ backgroundColor: "#9e9e9e26" }}>
                <CardContent>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div className="heartIcon"
                      style={{
                        display: "flex",
                        webkitBoxAlign: "center",
                        alignItems: "center",
                        webkitBoxPack: "center",
                        justifyContent: "center",
                        width: "40px",
                        height: "40px",
                        transition: "all 0.4s ease 0s",
                        textDecoration: "none",
                        color: "rgb(33, 33, 33)",
                        borderRadius: "50%",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    >
                      <FavoriteBorderIcon style={{ fontSize: "20px" }} />
                    </div>
                  </div>
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      overflow: "hidden",
                      margin: "auto",
                    }}
                  >
                    <img
                      src={shoppingCard13}
                      alt="Sofa"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div className="Btn">
                    <Button className="Cardbtn"
                      style={{
                        backgroundColor: "rgb(255, 112, 4)",
                        colo: "rgb(255, 255, 255)",
                      }}
                      onClick={() => addToFavorites("Item")}
                      variant="contained"
                    >
                      Add to Favorites
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-3">
              <Card style={{ backgroundColor: "#9e9e9e26" }}>
                <CardContent>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div className="heartIcon"
                      style={{
                        display: "flex",
                        webkitBoxAlign: "center",
                        alignItems: "center",
                        webkitBoxPack: "center",
                        justifyContent: "center",
                        width: "40px",
                        height: "40px",
                        transition: "all 0.4s ease 0s",
                        textDecoration: "none",
                        color: "rgb(33, 33, 33)",
                        borderRadius: "50%",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    >
                      <FavoriteBorderIcon style={{ fontSize: "20px" }} />
                    </div>
                  </div>
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      overflow: "hidden",
                      margin: "auto",
                    }}
                  >
                    <img
                      src={shoppingCard15}
                      alt="Sofa"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div className="Btn">
                    <Button className="Cardbtn"
                      style={{
                        backgroundColor: "rgb(255, 112, 4)",
                        colo: "rgb(255, 255, 255)",
                      }}
                      onClick={() => addToFavorites("Item")}
                      variant="contained"
                    >
                      Add to Favorites
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-3">
              <Card style={{ backgroundColor: "#9e9e9e26" }}>
                <CardContent>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div className="heartIcon"
                      style={{
                        display: "flex",
                        webkitBoxAlign: "center",
                        alignItems: "center",
                        webkitBoxPack: "center",
                        justifyContent: "center",
                        width: "40px",
                        height: "40px",
                        transition: "all 0.4s ease 0s",
                        textDecoration: "none",
                        color: "rgb(33, 33, 33)",
                        borderRadius: "50%",
                        backgroundColor: "rgb(255, 255, 255)",
                      }}
                    >
                      <FavoriteBorderIcon style={{ fontSize: "20px" }} />
                    </div>
                  </div>
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      overflow: "hidden",
                      margin: "auto",
                    }}
                  >
                    <img
                      src={shoppingCard14}
                      alt="Sofa"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                  <div className="Btn">
                    <Button className="Cardbtn"
                      style={{
                        backgroundColor: "rgb(255, 112, 4)",
                        colo: "rgb(255, 255, 255)",
                      }}
                      onClick={() => addToFavorites("Item")}
                      variant="contained"
                    >
                      Add to Favorites
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="4">
        <div className="row" style={{ marginTop: "100px" }}>
            <div className="col-12">
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <LocalMallOutlinedIcon
                  style={{ fontSize: "100px", color: "rgb(255, 112, 4)" }}
                />
                <h2
                  style={{
                    fontSize: "20px",
                    color: "rgb(33, 33, 33)",
                    margintop: "15px",
                    fontWeight: "600",
                    fontFamily: "Raleway",
                  }}
                >
                  There are no products!
                </h2>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{
              display: "flex",
              margin: "auto",
              gap: "15px",
              justifyContent: "center",
              paddingBottom: "100px",
              paddingTop: "100px",
            }}
          >
            <div className="col-6">
              <img src={feature_image_1} alt="" />
            </div>
            <div className="col-6">
              <img src={feature_image_2} alt="" />
            </div>
          </div>
          <div
            style={{
              marginBottom: "52px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontSize: "36px",
                marginBottom: "15px",
                fontWeight: "700",
              }}
            >
              Latest News
            </h3>
            <p
              style={{
                margin: "auto",
                color: "rgb(71, 71, 71)",
                fontWeight: "500",
                fontFamily: "Open Sans",
                width: "405px"
              }}
            >
              Torem ipsum dolor sit amet, consectetur adipisicing elitsed do
              eiusmo tempor incididunt ut labore
            </p>
          </div>
          <div style={{textAlign: "center"}}>
          <h3 style={{
              fontSize: "1.75rem",
              marginBottom: "0.5rem",
              fontFamily: "inherit",
              fontWeight: "500",
              lineHeight: "1.1",
              color: "inherit",
              marginTop: "0px"
            }}>There are no articles found!</h3>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

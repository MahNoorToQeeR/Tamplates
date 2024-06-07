import React from "react";
import card1 from "./img/card1.jpeg";
import card2 from "./img/card2.png";
import card3 from "./img/card3.jpeg";
import card4 from "./img/card4.jpeg";

const CardComponent = () => {
  return (
    <div
      className="row"
      style={{ display: "flex", gap: "4px", padding: "50px" }}
    >
      <div
        className="col-md-3 border bd"
        style={{
          margin: "auto",
          width: "180px",
          height: "180px",
          display: "flex",
          position: "relative",
          webkitBoxPack: "center",
          justifyContent: "center",
          transition: "all 0.4s ease 0s",
          borderRadius: "50%",
          // border: "2px solid rgb(67, 71, 78)",
        }}
      >
        <div
          className="card"
          style={{ alignSelf: "center", textAlign: "center" }}
        >
          <img
            src={card1}
            alt=""
            style={{
              display: "inline-block",
              maxWidth: "38%",
              overflow: "hidden",
              position: "relative",
              boxSizing: "border-box",
              margin: "0px",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">Bed Room</h5>
          </div>
        </div>
      </div>
      <div
        className="col-md-3 border"
        style={{
          margin: "auto",
          width: "180px",
          height: "180px",
          display: "flex",
          position: "relative",
          webkitBoxPack: "center",
          justifyContent: "center",
          transition: "all 0.4s ease 0s",
          borderRadius: "50%",
          // border: "2px solid rgb(67, 71, 78)",
        }}
      >
        <div className="card" style={{ alignSelf: "center", textAlign: "center" }}>
          <img
            src={card2}
            alt=""
            style={{
              display: "inline-block",
              maxWidth: "38%",
              overflow: "hidden",
              position: "relative",
              boxSizing: "border-box",
              margin: "0px",
            }}
          />
          <div className="card-body"><h5 className="card-title">Living Room</h5></div>
        </div>
      </div>
      <div
        className="col-md-3 border"
        style={{
          margin: "auto",
          width: "180px",
          height: "180px",
          display: "flex",
          position: "relative",
          webkitBoxPack: "center",
          justifyContent: "center",
          transition: "all 0.4s ease 0s",
          borderRadius: "50%",
          // border: "2px solid rgb(67, 71, 78)",
        }}
      >
        <div className="card" style={{ alignSelf: "center", textAlign: "center" }}>
          <img
            src={card3}
            alt=""
            style={{
              display: "inline-block",
              maxWidth: "38%",
              overflow: "hidden",
              position: "relative",
              boxSizing: "border-box",
              margin: "0px",
            }}
          />
          <div className="card-body"><h5 className="card-title">Diving</h5></div>
        </div>
      </div>
      <div
        className="col-md-3 border"
        style={{
          margin: "auto",
          width: "180px",
          height: "180px",
          display: "flex",
          position: "relative",
          webkitBoxPack: "center",
          justifyContent: "center",
          transition: "all 0.4s ease 0s",
          borderRadius: "50%",
          // border: "2px solid rgb(67, 71, 78)",
        }}
      >
        <div className="card  " style={{ alignSelf: "center", textAlign: "center" }}>
          <img
            src={card4}
            alt=""
            style={{
              display: "inline-block",
              maxWidth: "38%",
              overflow: "hidden",
              position: "relative",
              boxSizing: "border-box",
              margin: "0px",
            }}
          />
          <div className="card-body"><h5 className="card-title">Lounge</h5></div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;

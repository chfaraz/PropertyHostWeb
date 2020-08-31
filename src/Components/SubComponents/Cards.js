import React, { Component } from "react";
import Card from "./Card";
import Img from "../../Assets/634.jpg";
import Img1 from "../../Assets/692.jpg";
import Img2 from "../../Assets/527.jpg";

class Cards extends Component {
  render() {
    return (
      <div className="cards-wraper">
        <Card
          img={Img}
          title="Advertise"
          intro="Make your property promonent and sell it fast."
        />
        <Card
          img={Img1}
          title="SignUp as Agent"
          intro="Be a agent sell and rent property and earn money."
        />
        <Card
          img={Img2}
          title="3D home tour"
          intro="Contact us and request for creating 3D tour of your home."
        />
      </div>
    );
  }
}
export default Cards;

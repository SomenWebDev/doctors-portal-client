import React from "react";
import Infocard from "./Infocard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Infocard
        cardTitle="Opening Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
      ></Infocard>
      <Infocard
        cardTitle="Our Locations"
        bgClass="bg-accent"
        img={marker}
      ></Infocard>
      <Infocard
        cardTitle="Contact Us"
        img={phone}
        bgClass="bg-gradient-to-r from-secondary to-primary"
      ></Infocard>
    </div>
  );
};

export default Info;

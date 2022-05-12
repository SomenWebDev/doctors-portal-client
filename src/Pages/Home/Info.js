import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../images/icons/clock.svg";
import marker from "../../images/icons/marker.svg";
import phone from "../../images/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
      <InfoCard
        cardTitle="Opening Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
      ></InfoCard>
      <InfoCard
        cardTitle="Our locations"
        bgClass="bg-accent"
        img={marker}
      ></InfoCard>
      <InfoCard
        cardTitle="Contact us"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;

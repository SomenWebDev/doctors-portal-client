import React from "react";
import Footer from "../Shared/Footer";
import Hero from "./Hero";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <h2>This is home</h2>
      <Hero></Hero>
      <Info></Info>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <Footer></Footer>
    </div>
  );
};

export default Home;

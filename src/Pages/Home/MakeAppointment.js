import React from "react";
import doctor from "../../images/doctor.png";
import appointment from "../../images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 px-5">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-3xl text-white py-5">Make an appointment today.</h2>
        <p className="text-white pb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          consectetur maxime culpa esse distinctio. Consectetur fugit vel quae
          ipsam veniam suscipit totam animi praesentium eligendi earum eos
          minima aliquam rerum accusamus doloremque aperiam quia iste, alias
          cupiditate libero assumenda tempore!
        </p>
        <PrimaryButton>Get started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;

import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex justify-center items-center"
    >
      <div className="flex-1">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-primary">Appointment</h3>
        <h2 className="text-3xl text-white">Make an Appointment today</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt
          accusantium temporibus iusto, nam doloremque non vitae atque
          voluptatibus iure laboriosam cum aliquam recusandae repellat
          reprehenderit accusamus sit animi ducimus, dolor similique cupiditate,
          veniam quos facere. Obcaecati consectetur veritatis autem.
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;

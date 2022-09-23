import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row">
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
        <div class="max-w-sm rounded-lg shadow-2xl shrink-0">
          <img src={chair} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;

import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div class="hero min-h-screen bg-base-200">
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

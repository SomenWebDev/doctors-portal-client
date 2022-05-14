import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h4 className="text-xl text-primary text-center">
        Available Appointments on Available Appointment on {format(date, "pp")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service
            service={service}
            setTreatment={setTreatment}
            key={service._id}
          ></Service>
        ))}
      </div>
      {treatment && <BookingModal treatment={treatment}></BookingModal>}
    </div>
  );
};

export default AvailableAppointments;

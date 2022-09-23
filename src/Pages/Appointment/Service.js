import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body text-center">
        <h2 class="text-xl font-bold text-primary">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">No slot available</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div class="card-actions justify-center">
          <button class=""></button>
          <label
            for="booking-modal"
            class="btn btn-primary text-white"
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
          >
            Book appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;

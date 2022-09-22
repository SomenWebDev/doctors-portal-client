import React from "react";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Hero = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row">
        <div>
          <h1 class="text-5xl font-bold">Your new smile starts here</h1>
          <p class="py-6 text-xl max-w-xl">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Starts</PrimaryButton>
        </div>
        <div className="max-w-sm shrink-0 rounded-lg">
          <img src={chair} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

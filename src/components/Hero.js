import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Auth0-Ayshan</h1>

    <p className="lead">
      Everyday I learn something new! I am looking forward to getting more acquainted with Auth0.
    </p>
  </div>
);

export default Hero;

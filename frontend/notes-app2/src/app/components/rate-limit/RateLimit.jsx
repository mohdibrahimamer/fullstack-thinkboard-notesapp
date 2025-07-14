import React, { useState } from "react";
import { SiLightning } from "react-icons/si";
const RateLimit = () => {
  return (
    <>
      <div>RateLimit page</div>
      <section>
        <div className="logo">
          <SiLightning color="green" />
        </div>
        <div>
          <h1>rate limit reached</h1>
          <p>
            you have made a too many request in a short period. please wait a
            moment
          </p>
          <p>try again after a few seconds for the best experience</p>
        </div>
      </section>
    </>
  );
};

export default RateLimit;

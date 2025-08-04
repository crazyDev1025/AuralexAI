import React from "react";
import coin from "../../assets/coin_animation.mov";

export default function Coin() {
  return (
    <div id="about" className="relative inline-block  mt-[5rem] w-full h-[600px] ">
      <video src={coin} autoPlay loop muted className="w-full h-auto" />
      <div className="absolute inset-0 items-center justify-center  text-white flex flex-col text-center ">
        <div className="md:max-w-[100%] max-w-[22rem] flex justify-center flex-col items-center">
          <h2 className="lg:text-[5rem] text-[3rem] font-medium leading-[1.1]">
            {" "}
            See What Others Miss <br className="md:flex hidden" /> Gain an Edge
            with
          </h2>
          <p className="text-[1rem] md:w-[600px] text-center mt-[2rem]">
            Auralex AI isn't just a tool it's your AI-powered co-pilot in the
            wild world of crypto. We cut through the noise, revealing hidden
            gems and giving you the edge you need to dominate the market.
          </p>
        </div>
      </div>
    </div>
  );
}

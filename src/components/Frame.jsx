import React from "react";
import nft from "../assets/images/image-equilibrium.jpg";
import cover from "../assets/images/icon-view.svg";
const Frame = () => {
  return (
    <div className="relative">
      <img className="top-0 w-[19rem] rounded-2xl " src={nft} alt="nft"></img>
      <div className=" flex justify-center top-0 place-items-center absolute w-full h-full group">
        <img
          className="w-[3rem] h-[3rem] opacity-0 group-hover:opacity-100 z-10"
          src={cover}
          alt="cover"
        />
        <div className="group-hover:bg-cyan/40 z-0 w-full h-full absolute rounded-2xl "></div>
      </div>
    </div>
  );
};

export default Frame;

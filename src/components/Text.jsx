import React from "react";
import eth from "../assets/images/icon-ethereum.svg";
import clock from "../assets/images/icon-clock.svg";

const Text = ({ nft_name, nft_desc, nft_price, nft_time }) => {
  return (
    <div className="text-white mb-4">
      <h1 className="text-2xl font-bold my-6 hover:text-cyan hover:cursor-pointer">
        {nft_name}
      </h1>
      <p className="text-softblue max-w-[19rem]">{nft_desc}</p>
      <div className="flex flex-row justify-between h-6 my-6 text-center">
        <div className="flex flex-row ">
          <img className="mr-2 max-h-5 self-center" src={eth} alt="eth" />
          <p className="text-cyan font-semibold self-center">
            {nft_price} ETH{" "}
          </p>
        </div>
        <div className="flex flex-row">
          <img className="mr-1 max-h-5 self-center" src={clock} alt="eth" />
          <p className="text-softblue self-center">{nft_time} days left</p>
        </div>
      </div>
      <hr className="border-dark-blue-line" />
    </div>
  );
};

export default Text;

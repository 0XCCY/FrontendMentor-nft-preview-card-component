import React from "react";
import Frame from "../components/Frame";
import Creator from "../components/Creator";
import Text from "../components/Text";

const Card = () => {
  return (
    <div className="flex flex-col bg-dark-blue-card rounded-2xl p-8 shadow-2xl">
      <Frame />
      <Text
        nft_name="Equilibrium #3429"
        nft_desc="Our Equilibrium collection promotes balance and calm"
        nft_price="0.041"
        nft_time="3"
      />
      <Creator />
    </div>
  );
};

export default Card;

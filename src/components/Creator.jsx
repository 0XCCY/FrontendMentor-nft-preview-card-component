import React from "react";
import avatar from "../assets/images/image-avatar.png";

const Creator = () => {
  return (
    <div>
      <span className="flex flex-column align-middle">
        <img
          className="max-h-[2rem] border-white border-2 rounded-full mr-4"
          src={avatar}
          alt="avatar"
        />
        <p className="text-softblue self-center">Creation of &nbsp;</p>
        <p className="text-white self-center hover:text-cyan hover:cursor-pointer">
          Jules Wyvern
        </p>
      </span>
    </div>
  );
};

export default Creator;

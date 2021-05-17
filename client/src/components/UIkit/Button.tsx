import React from "react";
import { buttonProp } from "../../../src/types";

const Button: React.FC<buttonProp> = ({ button }) => {
  return (
    <div className="relative border border-solid border-red-200 rounded-md bg-red-200 w-24 h-10">
      <button className="text-gray-500 font-semibold tracking-wider absolute inset-0 m-auto outline-none focus:outline-none">
        {button}
      </button>
    </div>
  );
};

export default Button;

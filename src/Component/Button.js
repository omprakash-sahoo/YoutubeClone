import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button
        className={`px-[10px] py-[8px] rounded-lg ml-2 font-semibold text-sm ${
          name == "All" ? " text-white bg-black" : "bg-gray-100"
        }`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;

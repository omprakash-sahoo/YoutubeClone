import React from "react";
import Button from "./Button";

const ButonList = () => {
  const buttonTitle = [
    "All",
    "Music",
    "Tseries",
    "Netflix",
    "Hotstar",
    "Rect Js",
    "Node Js",
    "Python",
    "Mahabharat",
    "Ramayan",
    "Bollywood",
    "Squid Games",
    "Lucifer",
    "India",
    "Odisha",
    "Bhubaneswar",
  ];
  return (
    <div className="flex flex-wrap">
      {buttonTitle.map((title, index) => {
        return <Button key={index} name={title} />;
      })}
    </div>
  );
};

export default ButonList;

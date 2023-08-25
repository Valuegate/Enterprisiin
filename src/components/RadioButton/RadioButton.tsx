"use client";
import React, { useState } from "react";


const RadioButton = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <input
        id="default-radio-1"
        type="radio"
        value="option1"
        name="default-radio"
        className="custom w-4 h-4"
        checked={selectedOption === "option1"}  
        onChange={handleOptionChange}
      />
    </>
  );
};

export default RadioButton;

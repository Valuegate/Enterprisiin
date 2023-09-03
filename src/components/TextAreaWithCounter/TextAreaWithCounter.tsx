import React, { FC, useState } from "react";

interface iTextAreaWithCounter {
    placeholder: string;
  }

const TextAreaWithCounter: FC<iTextAreaWithCounter> = ({ placeholder }) => {
  const [text, setText] = useState("");
  const maxLength = 120; // Define your desired maximum character limit

  const handleChange = (e: { target: { value: any } }) => {
    const newText = e.target.value;
    if (newText.length <= maxLength) {
      setText(newText);
    }
  };

  return (
    <div className="">
      <textarea
        className="search placeholder-italic mt-1 p-3 border-none bg-white-1 rounded w-full"
        // rows={4}
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
      ></textarea>
      <div className="font-medium text-base text-light-black-5 text-right">
        {maxLength - text.length} characters remaining
      </div>
    </div>
  );
}

export default TextAreaWithCounter;

import React from "react";

export const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-white text-black px-10 py-4 text-xl uppercase tracking-widest hover:bg-black hover:text-white rounded-3xl"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

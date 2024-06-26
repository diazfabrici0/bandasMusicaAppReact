import React from "react";

export const SocialLink = ({ href, children }) => {
  return (
    <>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </>
  );
};

import React from "react";
import CustomScrollButton from "./CustomScrollButton";

const ScrollDown = () => {
  return (
    <CustomScrollButton>
      <div className="turn">
        <span> &gt; </span>
      </div>
    </CustomScrollButton>
  );
};

export default ScrollDown;

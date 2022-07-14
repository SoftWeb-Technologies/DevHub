import React from "react";

const Col = ({ children }, props) => {
  return (
    <div className={"col"} {...props}>
      {children}
    </div>
  );
};

export default Col;

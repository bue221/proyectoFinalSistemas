import React from "react";

const FloorPersons: React.FC<any> = ({ children, floor }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 138 + (6 - floor) * 94,
        left: 427,
        display: "flex",
        gap: "5px",
        justifyContent: "flex-end",
        alignItems: "baseline",
      }}
    >
      {children}
    </div>
  );
};

export default FloorPersons;

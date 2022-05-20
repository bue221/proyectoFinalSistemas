import React from "react";

const Person = ({
  width,
  height,
}: {
  width: string | number;
  height: string | number;
}) => {
  return (
    <div
      style={{
        background: "black",
        width: width,
        height: height,
      }}
    />
  );
};

export default Person;

import React from "react";

const Tour = ({tour}) => {
    const { id, name, info, image, price } = tour
  return <div>{name}</div>;
};

export default Tour;

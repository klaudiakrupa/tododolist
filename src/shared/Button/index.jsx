import React from "react";

import components from "./styles";

const HomePage = ({ text, onClick, color, type }) => {
  const { Button } = components;

  return (
    <Button onClick={onClick} color={color} type={type}>
      {text}
    </Button>
  );
};

export default HomePage;

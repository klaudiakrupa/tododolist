import React from "react";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

import components from "./styles";

const HomePage = ({ onClick }) => {
  const { Button } = components;

  return <Button icon={faArrowAltCircleLeft} onClick={onClick} />;
};

export default HomePage;

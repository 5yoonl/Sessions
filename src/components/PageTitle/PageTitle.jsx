import React from "react";
import { PageTitle } from "./PageTitle";
const Title = ({ title, color = "black" }) => {
  return <PageTitle color={color}>{title}</PageTitle>;
};

export default Title;

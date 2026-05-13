import { Spinner } from "@heroui/react";
import React from "react";

const Loading = ({ size, className }) => {
  return <Spinner size={size} className={className} />;
};

export default Loading;

import { Typography } from "@mui/material";
import React from "react";

type Props = {
  title: string;
};

const ThemeInfo = (props: Props) => {
  return <Typography variant="h4">{props.title}</Typography>;
};

export default ThemeInfo;

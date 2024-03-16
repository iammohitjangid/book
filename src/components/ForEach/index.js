import React, { Children } from "react";

export const ForEach = (props) => {
  const { render, of } = props;
  return Children.toArray(of.map((item, index) => render(item, index)));
};

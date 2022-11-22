import React, { useState } from "react";
import { Slider, Switch } from "antd";

const SliderAntd = ({ minPrice, maxPrice }) => {
  const [value, setValue] = useState([minPrice, maxPrice]);
  return (
    <>
      <Slider min={0} max={1000} range defaultValue={[value[0], value[1]]} />
    </>
  );
};

export default SliderAntd;

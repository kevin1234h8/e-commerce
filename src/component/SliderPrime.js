import React from "react";
import { Slider } from "primereact/slider";
import { useState } from "react";
import "primereact/resources/primereact.min.css";

const SliderPrime = ({ minPrice, maxPrice }) => {
  const [value5, setValue5] = useState([minPrice, maxPrice]);
  return (
    <div>
      <h5>
        Range: [{value5[0]}, {value5[1]}]
      </h5>
      <Slider value={value5} onChange={(e) => setValue5(e.value)} range />
    </div>
  );
};

export default SliderPrime;

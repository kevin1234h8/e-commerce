import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
// function valuetext(value) {
//   return `${value}°C`;
// }

export default function RangeSlider({
  minPrice,
  maxPrice,
  priceFilter,
  value,
  setValue,
}) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        min={0}
        max={2000}
        step={50}
        getAriaLabel={() => "Temperature range"}
        value={value}
        sx={{
          color: "#6A983C",
        }}
        onChange={handleChange}
        valueLabelDisplay="auto"
        // getAriaValueText={valuetext}
      />
    </Box>
  );
}

import React, { useState, useEffect } from "react";

export function BoxColor({ colorB }) {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const colorArray = colorB.split(",");
    setColors((prevColors) => [...prevColors, ...colorArray]);
  }, [colorB]);

  return (
    <>
      {colors.map((colorName, index) => (
        <div
          key={index}
          style={{
            display: "inline-block",
            width: "100px",
            height: "100px",
            backgroundColor: colorName,
            marginRight: "10px",
            marginTop: "10px",
          }}
        ></div>
      ))}
    </>
  );
}

import React, { useState } from "react";
import { BoxColor } from "./BoxColor"; 
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function Input() {
  const [color, setColor] = useState(""); 
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredColor = e.target.color.value; 
    setColor(enteredColor); 
    e.target.reset(); 
  };

  return (
    <>
    <h1>Color Palette Generator</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="color"
          name="color"
          label="Color"
          variant="outlined"
          required
        />
        <Button type="submit" variant="contained" sx={{marginLeft: "5px"}}>
          Submit
        </Button>
      </form>
      <BoxColor colorB={color} />

    </>
  );
}

import { useState } from "react";

export const RandomColor = () => {
  const [color, setColor] = useState("");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  const randomGenerator = (length) => {
    return Math.floor(Math.random() * length);
  };

  const CreateHex = () => {
    setColor("hex");
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomGenerator(hex.length)];
    }
    setColor(hexColor);
  };

  const CreateRgb = () => {
    setTypeOfColor("rgb");
    const r = randomGenerator(256);
    const g = randomGenerator(256);
    const b = randomGenerator(256);
    setColor(`rgb(${r},${g},${b})`);
  };

  return (
    <div>
      <div
        style={{
          width: "500px",
          height: "500px",
          background: color,
          display: "grid",
          placeContent: "center",
        }}
      >
        {typeOfColor === "hex" ? (
          <h3>hex : {color} </h3>
        ) : (
          <h3>Rgb : {color} </h3>
        )}
      </div>
      <button onClick={CreateHex}>Generate Hex</button>
      <button onClick={CreateRgb}>Generate rbg</button>
    </div>
  );
};

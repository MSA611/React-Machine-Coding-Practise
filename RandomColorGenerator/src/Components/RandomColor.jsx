import { useState } from "react";

export const RandomColor = () => {
  const [color, setColor] = useState("#000000");
  const [type, setType] = useState("hex");
  const generateRandom = (length) => {
    return Math.floor(Math.random() * length);
  };

  const CreateHex = () => {
    setType("hex");
    let hexCode = "#";
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E"];
    for (let i = 0; i < 6; i++) {
      hexCode += hex[generateRandom(hex.length)];
    }
    setColor(hexCode);
  };

  const CreateRgb = () => {
    setType("rgb");
    let r = generateRandom(256);
    let g = generateRandom(256);
    let b = generateRandom(256);
    let rgb = `rgb(${r},${g},${b})`;
    setColor(rgb);
  };

  return (
    <div>
      <div
        style={{
          margin: "5px",
          display: "grid",
          placeContent: "center",
          width: "500px",
          height: "500px",
          backgroundColor: color,
        }}
      >
        {type === "hex" ? <h3>hex : {color}</h3> : <h3>rgb : {color}</h3>}
      </div>
      <button
        style={{
          border: "2px solid black",
          padding: "2px",
          margin: "5px",
        }}
        onClick={CreateHex}
      >
        Generate Hex{" "}
      </button>

      <button
        onClick={CreateRgb}
        style={{
          border: "2px solid black",
          padding: "2px",
          margin: "5px",
        }}
      >
        Generate Rgb{" "}
      </button>
    </div>
  );
};

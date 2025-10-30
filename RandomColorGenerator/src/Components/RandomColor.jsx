import React from "react";

export const RandomColor = () => {
  const [color, setColor] = React.useState("#000000");
  const [type, setType] = React.useState("hex");

  const generateRandom = (length) => {
    return Math.floor(Math.random() * length);
  };

  const Createhex = () => {
    setType("hex");
    let hex = "#";
    const arr = ["A", "B", "C", "D", "E", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 1; i <= 6; i++) {
      hex += arr[generateRandom(arr.length)];
    }
    setColor(hex);
  };

  const CreateRgb = () => {
    setType("rgb");
    const r = generateRandom(256);
    const g = generateRandom(256);
    const b = generateRandom(256);
    setColor(`rgb(${r},${g},${b})`);
  };

  return (
    <div>
      <div
        className="w-[200px] text-white text-center content-center h-[300px] border-2 border-black m-10"
        style={{
          backgroundColor: color,
        }}
      >
        {type === "hex" ? `hex : ${color}` : `RGB : ${color}`}
      </div>
      <button
        onClick={Createhex}
        className="border-2 border-black p-3 m-3 hover:bg-black hover:text-white cursor-pointer"
      >
        Generate Hex
      </button>

      <button
        onClick={CreateRgb}
        className="border-2 border-black p-3 m-3 hover:bg-black hover:text-white cursor-pointer"
      >
        Generate Rgb
      </button>
    </div>
  );
};

import { useState } from "react";
import data from "./data.js";
const Accordian = () => {
  const [select, setSelect] = useState(null);
  const [multi, setMulti] = useState(false);
  const [arr, setArr] = useState([]);

  const handleQuestion = (currentId) => {
    setSelect(select === currentId ? null : currentId);
  };

  const MultiSelect = (currentId) => {
    const copyArr = [...arr];
    const findItem = copyArr.indexOf(currentId);
    if (findItem === -1) copyArr.push(currentId);
    else copyArr.splice(findItem, 1);
    setArr(copyArr);
  };

  console.log(multi);
  return (
    <div>
      <button
        onClick={() => setMulti(!multi)}
        className="cursor-pointer font-semibold p-3 bg-red-800 border-black border-2 mt-5 mx-4 text-white hover:text-black hover:bg-white"
      >
        Enable Multi Selection
      </button>
      {data.length > 0 ? (
        <div>
          {data.map((item) => (
            <h1
              onClick={
                MultiSelect
                  ? () => MultiSelect(item.id)
                  : () => handleQuestion(item.id)
              }
              key={item.id}
              className="text-3xl m-4 border-2 border-black font-bold tracking-tight text-gray-900"
            >
              {item.question}
              {MultiSelect && arr.indexOf(item.id) !== -1 ? (
                <div className="text-xl font-semibold tracking-tight text-gray-800">
                  {item.answer}
                </div>
              ) : select === item.id ? (
                <div className="text-xl font-semibold tracking-tight text-gray-800">
                  {item.answer}
                </div>
              ) : null}
            </h1>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Accordian;

import { useState } from "react";
import data from "./data.js";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [arr, setArr] = useState([]);

  const handleQuestion = (currentId) => {
    setSelected(selected === currentId ? null : currentId);
  };

  const handleMulti = (currentId) => {
    const copyarr = [...arr];
    const findItem = copyarr.indexOf(currentId);
    if (findItem === -1) copyarr.push(currentId);
    else copyarr.splice(currentId);
    setArr(copyarr);
  };
  return (
    <div>
      <button
        onClick={() => setMultiSelection(!multiSelection)}
        className="border-2 border-black text-white m-5 cursor-pointer bg-red-900 hover:bg-white hover:text-black"
      >
        Enable MultiSelection
      </button>
      {data.length > 0 ? (
        <div>
          {data.map((item) => (
            <div
              onClick={
                multiSelection
                  ? () => handleMulti(item.id)
                  : () => handleQuestion(item.id)
              }
              key={item.id}
              className="border-2 m-5 "
            >
              {item.question}
              {multiSelection && arr.indexOf(item.id) !== -1 ? (
                <div>{item.answer}</div>
              ) : selected === item.id ? (
                <div>{item.answer}</div>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <h3>No Data Present</h3>
      )}
    </div>
  );
};

export default Accordian;

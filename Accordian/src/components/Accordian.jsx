import { useState } from "react";
import data from "./data.js";
const Accordian = () => {
  const [questionId, setQuestionId] = useState(null);
  const [multiSelection, setMultiSelectionl] = useState(false);
  const [arr, setArr] = useState([]);

  const handleMultiSelection = (id) => {
    const copyArr = [...arr];
    const findItem = copyArr.indexOf(id);
    if (findItem === -1) copyArr.push(id);
    else copyArr.splice(findItem, 1);
    setArr(copyArr);
  };

  return (
    <div>
      {multiSelection ? (
        <button
          onClick={() => setMultiSelectionl(!multiSelection)}
          className="p-3 hover:bg-red-500 border-2 border-black text-black hover:text-white bg-white m-3 cursor-pointer w-sm"
        >
          Enable Multi Selection
        </button>
      ) : (
        <button
          onClick={() => setMultiSelectionl(!multiSelection)}
          className="p-3 bg-red-500 border-2 border-black hover:text-black text-white hover:bg-white m-3 cursor-pointer w-sm"
        >
          Enable Multi Selection
        </button>
      )}
      {data.length > 0 ? (
        <div>
          {data.map((item) => (
            <div
              className="border-2 border-black p-3 m-3 w-sm "
              onClick={
                multiSelection
                  ? () => handleMultiSelection(item.id)
                  : () => setQuestionId(questionId === item.id ? null : item.id)
              }
            >
              {item.question}
              {multiSelection && arr.indexOf(item.id) !== -1 ? (
                <div className="mt-3">{item.answer}</div>
              ) : questionId === item.id ? (
                <div className="mt-3">{item.answer}</div>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <div>No data left</div>
      )}
    </div>
  );
};

export default Accordian;

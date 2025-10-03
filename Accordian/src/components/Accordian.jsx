import { useState } from "react";
import data from "./data.js";

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  const handleQuestion = (currentId) => {
    setSelected(selected === currentId ? null : currentId);
  };
  return (
    <div>
      {data.length > 0 ? (
        <div>
          {data.map((item) => {
            return (
              <div onClick={() => handleQuestion(item.id)} key={item.id}>
                {item.question}
                <h3>
                  {selected === item.id ? (
                    <h3 key={item.id}>{item.answer}</h3>
                  ) : null}
                </h3>
              </div>
            );
          })}
        </div>
      ) : (
        <h3>Not Data Present</h3>
      )}
    </div>
  );
};

export default Accordian;

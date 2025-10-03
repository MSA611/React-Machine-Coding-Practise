import { useState } from "react";
import data from "./data.js";

const Accordian = () => {
  const [selected, setSelected] = useState();

  const handleSingleSelection = (id) => {
    console.log(id);
  };
  return (
    <div>
      <div>
        {data.length > 0 ? (
          data.map((data) => {
            return (
              <div className="title">
                <div
                  onClick={() => handleSingleSelection(data.id)}
                  className="content"
                >
                  <h3>{data.question}</h3>
                </div>
              </div>
            );
          })
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;

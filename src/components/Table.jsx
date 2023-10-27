import { useState } from "react";
import "../styles.css";
import Cell from "./Cell";
import HiddenButton from "./HiddenButton";

const Table = () => {
  const [value, setValue] = useState("X");
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const isFullArray = board.every((item) => item !== "");

  if (isFullArray) {
  }

  const onChange = (rowIndex, cellIndex) => {
    setBoard((prev) => {
      let res = [...prev];
      res[rowIndex][cellIndex] = value;
      return res;
    });

    if (value === "X") setValue("O");
    else setValue("X");
  };
  return (
    <div>
      <h1>Turn: {value}</h1>
      <HiddenButton />
      <table className="tableStyles">
        {board.map((row, rowIndex) => {
          return (
            <tr>
              {row.map((value, index) => {
                return (
                  <Cell
                    onChangeValue={() => onChange(rowIndex, index)}
                    value={value}
                  />
                );
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;

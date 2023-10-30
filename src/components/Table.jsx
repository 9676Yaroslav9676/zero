import { useState } from "react";
import "../styles.css";
import Cell from "./Cell";

const Table = () => {
  const [value, setValue] = useState("X");
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  let isFullArray = board.every((arr) => arr.every((item) => item !== ""));
  const handleButtonClick = () => {
    window.location.reload();
  };

  let isFiveValue = board.flat().filter((value) => value !== "").length;
  let message = "Game draw";

  const arrValue = ["X", "O"];

  if (isFiveValue > 4) {
    for (let value of arrValue) {
      if (
        board[0][0] === value &&
        board[1][1] === value &&
        board[2][2] === value
      ) {
        isFullArray = true;
        message = "'" + value + "'" + "   win";
      }
      if (
        board[2][0] === value &&
        board[1][1] === value &&
        board[0][2] === value
      ) {
        isFullArray = true;
        message = "'" + value + "'" + "   win";
      }
      for (let i = 0; i < 3; i++) {
        if (board[i].every((item) => item === value)) {
          isFullArray = true;
          message = "'" + value + "'" + "   win";
        }
        if (
          board[0][i] === value &&
          board[1][i] === value &&
          board[2][i] === value
        ) {
          isFullArray = true;
          message = "'" + value + "'" + "   win";
        }
      }
    }
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
    <div className="tableBody">
      <h1>Turn: {value}</h1>

      <div className="tableStyles">
        {board.map((row, rowIndex) => {
          return (
            <div key={rowIndex}>
              {row.map((value, index) => {
                return (
                  <Cell
                    key={index}
                    onChangeValue={() => onChange(rowIndex, index)}
                    value={value}
                    isFullArray={isFullArray}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <div>
        <button
          className="reboot"
          onClick={handleButtonClick}
          hidden={!isFullArray}
        >
          {message}
        </button>
      </div>
    </div>
  );
};

export default Table;

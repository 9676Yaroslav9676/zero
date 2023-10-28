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
    window.location.reload()
  };

  if(board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X"){
    isFullArray = true
  }
  if(board[0].every((item) => item === "X")){
    isFullArray = true
  }

  const onChange = (rowIndex, cellIndex) => {
    setBoard((prev) => {
      let res = [...prev]; 
      res[rowIndex][cellIndex] = value;
      console.log(res)
      return res;
    });

    if (value === "X") setValue("O");
    else setValue("X");
  };
  return (
    <div>
      <h1>Turn: {value}</h1>
      
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
      <div>
      <button  className="reboot" onClick={handleButtonClick} hidden={!isFullArray}>Перезапустити</button>
      </div>
      
    </div>
  );
};

export default Table;

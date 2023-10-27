import "../styles.css";
import { useState } from "react";

const Cell = () => {
  const [value, setValue] = useState(null);

  const onChangeValue = () => {
    setValue((value) => (value = "X"));
  };

  return (
    <td className="cellStyles" onClick={onChangeValue}>
      {value}
    </td>
  );
};

export default Cell;

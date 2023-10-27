import "../styles.css";

const Cell = ({ onChangeValue, value = "" }) => {
  let color = "";
  if (value === "X") {
    color = "button";
  } else {
    color = "button0";
  }
  return (
    <td className="cellStyles">
      <button className={color} onClick={onChangeValue} disabled={value}>
        {value}
      </button>
    </td>
  );
};

export default Cell;

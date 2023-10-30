import "../styles.css";

const Cell = ({ onChangeValue, value = "", isFullArray }) => {
  let color = "";
  if (value === "X") {
    color = "button";
  } else {
    color = "button0";
  }
  return (
    <div className="cellStyles">
      <button
        className={color}
        onClick={onChangeValue}
        disabled={value || isFullArray}
      >
        {value}
      </button>
    </div>
  );
};

export default Cell;

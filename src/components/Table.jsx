import "../styles.css";
import Cell from "./Cell";

const Table = () => {
  return (
    <div>
      <table className="tableStyles">
        <tr>
          <Cell />
          <Cell />
          <Cell />
        </tr>
        <tr>
          <Cell />
          <Cell />
          <Cell />
        </tr>
        <tr>
          <Cell />
          <Cell />
          <Cell />
        </tr>
      </table>
    </div>
  );
};

export default Table;

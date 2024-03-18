const Star = ({ filled }) => (
  <span
    aria-hidden="true"
    style={{
      fontSize: "30px",
      cursor: "default",
      color: filled ? "orange" : "grey",
    }}
  >
    ★
  </span>
);

export default Star;

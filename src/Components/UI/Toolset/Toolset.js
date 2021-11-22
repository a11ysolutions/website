import "../../Home/Home.css"
import Button from "../Button/Button"

function Toolset() {
  return (
    <div
      className="home-header-text-button"
      style={{ marginTop: "139px" }}
    >
      <h1>
        Our <span style={{ color: "#0D9E71" }}>toolset</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
      </p>
      <Button size="large">Get a free consultation</Button>
    </div>
  );
}

export default Toolset;
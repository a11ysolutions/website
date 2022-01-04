import "../../Home/Home.css";
import Button from "../Button/Button";
import { scrollToContactForm } from "../../Utils/Utils";
import BicolorTitledText from "../BicolorTitledText/BicolorTitledText";
import ToolList from "../ToolList/ToolList";

import "./Toolset.css";

function Toolset() {
  return (
    <div style={{ marginTop: "60px" }} className="toolset-container">
      <BicolorTitledText
        color1="black"
        color2="#0D9E71"
        color1Text="Our"
        color2Text="toolset"
      >
        <p>
          Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea.
        </p>
        <Button size="large" onClick={scrollToContactForm}>
          Get a free consultation
        </Button>
      </BicolorTitledText>
      <div className="toolset-mobile-circle"></div>
      <div className="toolset-tablet-circle"></div>
      <div className="toolset-desktop-1-circle"></div>
      <div className="toolset-desktop-2-circle"></div>
      
      <ToolList></ToolList>
    </div>
  );
}

export default Toolset;

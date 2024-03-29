import React, { Fragment, useEffect } from "react";
import PresentationSign from "../UI/PresentationSign/PresentationSign";
import HomeIlustration from "../UI/HomeIlustration/HomeIlustration";
import "./Home.css";
import Clients from "../UI/Clients/Clients";
import Services from "../UI/Services/Services";
// import Toolset from "../UI/Toolset/Toolset"
import Qualities from "../UI/Qualities/Qualities";
import BicolorTitledText from "../UI/BicolorTitledText/BicolorTitledText";
import { Helmet } from "react-helmet";
import OurProducts from "../UI/OurProducts/OurProducts";
import { handleOpenWidget } from "../Utils/Utils";
import { ImageDivider } from "../UI/ImageDivider/ImageDivider";

function Home() {
  const urlParams = new URLSearchParams(window.location.search);
  const openWidget = urlParams.get("openWidget");

  useEffect(() => {
    const layout = document.querySelector(".layout-content");
    layout.style.padding = "0";

    handleOpenWidget(openWidget);
  }, [openWidget]);

  return (
    <Fragment>
      <Helmet>
        <title>
          Functional, Accessibility and Automation testing services |
          A11ysolutions
        </title>
      </Helmet>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="a11y-home-presentation-container">
          <PresentationSign className="home-presentation-sign-custom-text" />
          <div className="home-page-ilustration-container">
            <HomeIlustration
              firstPillText="Functionality"
              secondPillText="Accessibility"
              thirdPillText="Automation"
            />
          </div>
        </div>

        <Qualities className="home-qualities" />
      </div>
      <Clients />

      <div className="home-our-services-section" id="our-services">
        <div className="home-services-bicolored-text">
          <BicolorTitledText
            color1="white"
            color2="white"
            color1Text="Our"
            color2Text="services"
            className="home-our-services"
          >
            <p>
              We provide more than services, <br />
              we provide opportunities to make your product better
              <br />
              and not only maintain but also attract new users.
            </p>
          </BicolorTitledText>
        </div>
        <Services />
        <ImageDivider bottom />
      </div>
      {/* <Toolset /> */}
      <OurProducts />
    </Fragment>
  );
}

export default Home;

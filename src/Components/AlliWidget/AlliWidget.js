import React from "react";
import { Helmet } from "react-helmet";
import Presentation from "../UI/Presentation/Presentation";
import BicolorTitledText from "../UI/BicolorTitledText/BicolorTitledText";
import CustomCard from "../UI/CustomCard/CustomCard";
import TryItNow from "../UI/TryItNow/TryItNow";
import "./AlliWidget.css";
import { ImageDivider } from "../UI/ImageDivider/ImageDivider";
import Button from "../UI/Button/Button";
import { navigateToHome } from "../Utils/Utils";

function AlliWidget() {
  const servicesList = {
    title:
      "Overcoming Accessibility Challenges: Is Your Website Truly Inclusive?",
    services: [
      {
        title: "Starting Your Accessibility Journey",
        description:
          "Unsure where to begin with transforming your site into an accessible haven for all users?",
      },
      {
        title: "Legal and Compliance Concerns",
        description:
          "Worried about the legal implications of not meeting WCAG and Section 508 standards?",
      },
      {
        title: "Budgeting for Accessibility",
        description:
          "Concerned about the costs associated with making your website fully accessible?",
      },
      {
        title: "Maintaining Your Brand's Image",
        description:
          "Afraid that lack of accessibility compliance could tarnish your brand's reputation?",
      },
    ],
  };
  const featuresList = {
    title: "Solutions to Your Accessibility Challenges",
    features: [
      {
        title: "Quick Start",
        description:
          "Our widget is a practical first step towards improving your site's accessibility, offering partial compliance and easing the transition towards full standards adherence.",
        imgDiv: "/back-mac.png",
        classImgDivBrowser: "imgDiv-mac",
        className: "shadow-none custom-sized-image image-increase-height",
        imgSrc: "/user-customization.jpg",
      },
      {
        title: "Boost Compliance",
        description:
          "It enhances your site's compatibility with accessibility standards, reducing legal risks by addressing critical compliance areas effectively.",
        imgDiv: "/back-mac.png",
        classImgDivBrowser: "imgDiv-mac",
        className: "custom-sized-image",
        imgSrc: "/wcag-2.1-compliance.png",
      },
      {
        title: "Affordable Approach",
        description:
          "Implement key accessibility features without a hefty investment, offering a cost-efficient solution to common accessibility hurdles.",
        imgDiv: "/back-mac.png",
        classImgDivBrowser: "imgDiv-mac",
        className: "custom-sized-image ",
        imgSrc: "/inclusivity.jpg",
      },
      {
        title: "Brand Integrity",
        description:
          "Improve your website's accessibility and demonstrate your commitment to inclusivity, positively impacting your brand's image.",
        imgDiv: "/back-mac.png",
        classImgDivBrowser: "imgDiv-mac",
        className: "shadow-none custom-sized-image image-increase-height",
        imgSrc: "/user-experience.jpg",
      },
    ],
  };
  const chooseList = {
    title:
      "Seeking a Step Towards Enhanced Web Accessibility? Why Choose AlliWidget?",
    chooses: [
      {
        title: "Simplicity and Efficiency",
        description:
          "Designed for easy integration and immediate impact on accessibility.",
      },
      {
        title: "Focused Compliance",
        description:
          "Targets key compliance areas to effectively address common accessibility barriers.",
      },
      {
        title: "Cost-Effective Solution",
        description:
          "Offers a significant improvement in accessibility without the need for large investments.",
      },
      {
        title: "Brand Integrity",
        description:
          "Demonstrates your commitment to inclusivity, enhancing your brand's reputation.",
      },
      {
        title: "24/7 Support",
        description:
          "Dedicated around-the-clock support ensures any issues are promptly addressed, providing peace of mind and reliable assistance.",
      },
      {
        title: "Expert Team",
        description:
          "The widget is backed by a passionate team with extensive experience in accessibility, committed to delivering the best solutions and staying ahead of compliance trends.",
      },
    ],
  };
  return (
    <div id="alliWidget" className="alliWidget-page-container">
      <Helmet>
        <title>
          AlliWidget - Your ultimate automated Web Accessibility Solution |
          A11ysolutions
        </title>
      </Helmet>

      {/* =============== alliWidget-presentation-container =============== */}
      <div className="alliWidget-presentation-container">
        <div className="page-top">
          <Presentation
            title="Need to be more inclusive and comply immediately with Web Accessibility Standards?"
            texts={[
              "Unlock instantaneously web accessibility barriers and more with AlliWidget.",
            ]}
            handleClick={navigateToHome}
            buttonText="TRY IT NOW"
            className="alliWidget-presentation-sign"
          />
        </div>
        <div className="privacy-policy-ilustration-container">
          <img
            alt="We work passionately on functional testing, accessibility testing, and automation testing services."
            className="alliWidget-image"
            src="/alliwidgets.png"
          />
        </div>
      </div>

      {/* =============== alliWidget-content ===============  */}
      <div className="alliWidget-content">
        {/* =============== alliWidget-accessibility ===============  */}
        <div className="alliWidget-accessibility" role="list">
          <div className="home-services-bicolored-text" role="listitem">
            <BicolorTitledText
              color2="#fff"
              color2Text={servicesList.title}
              className="home-our-services"
            ></BicolorTitledText>
          </div>
          <div className="alliWidget-accessibility-content">
            {servicesList.services.map((s, index) => (
              <CustomCard key={index} className="accessibility-item">
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </CustomCard>
            ))}
          </div>
          <Button
            size="large"
            onClick={navigateToHome}
            variant="negative"
            role="listitem"
          >
            Try It Free
          </Button>
          <ImageDivider top bottom variantTopGreen />
        </div>

        {/* =============== alliWidget-features ===============  */}
        <div className="alliWidget-features" role="list">
          <div className="home-services-bicolored-text" role="listitem">
            <BicolorTitledText
              color1="#0D9E71"
              color1Text={featuresList.title}
              className="home-our-services"
            ></BicolorTitledText>
          </div>

          <div className="alliWidget-features-content">
            {featuresList.features.map((f, index) => (
              <CustomCard
                key={index}
                imgSrc={f.imgSrc}
                className={f.className}
                imgDiv={f.imgDiv}
                classImgDivBrowser={f.classImgDivBrowser}
              >
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </CustomCard>
            ))}
          </div>

          <Button
            size="large"
            onClick={navigateToHome}
            variant="dark"
            role="listitem"
          >
            Try It Free
          </Button>
        </div>

        {/* =============== alliWidget-why-choose ===============  */}
        <div className="alliWidget-why-choose" role="list">
          <div className="home-services-bicolored-text" role="listitem">
            <BicolorTitledText
              color2="#fff"
              color2Text={chooseList.title}
              className="home-our-services"
            ></BicolorTitledText>
          </div>
          <div className="alliWidget-why-choose-content">
            {chooseList.chooses.map((c, index) => (
              <CustomCard key={index} className="accessibility-item">
                <h3>{c.title}</h3>
                <p>{c.description}</p>
              </CustomCard>
            ))}
          </div>

          <ImageDivider top />
        </div>

        {/* =============== tryItNow ===============  */}
        <TryItNow
          handleNavigate={navigateToHome}
          text="Give it a try for free"
          buttonText="Try It Now"
        >
          <ImageDivider top variantTopBlack bottom />
        </TryItNow>

        {/* =============== alliWidget-review ===============  */}
        <div className="alliWidget-review">
          <div className="alliWidget-review-header">
            <div className="home-services-bicolored-text">
              <BicolorTitledText
                color1="black"
                color2="#0D9E71"
                color2Text="Some awesome reviews"
                className="home-our-services"
              ></BicolorTitledText>
            </div>

            <div className="alliWidget-review-content" role="list">
              <CustomCard
                imgSrc="/yainery-bolanos.png"
                className="custom-horizontal-card"
                classTextContainer="text-container-horizontal"
                classEllipseBar="card-ellipse-bar"
                icon
              >
                <h3>Yainery Bolanos, CEO/Co-Founder at Adaved</h3>
                <p>
                  We just started using alliWidget and it's already helping us a
                  lot. It's like having a specialist with us all the time,
                  making our work faster and better.
                </p>
              </CustomCard>
              <CustomCard
                imgSrc="/luis-terrero.png"
                className="custom-horizontal-card shadow"
                classTextContainer="text-container-horizontal"
                classEllipseBar="card-ellipse-bar"
                icon
              >
                <h3>Luis Terrero, CEO/Founder at PixelPerfecto</h3>
                <p>
                  We recently started using alliWidget and we're very happy.
                  Even in its MVP stage, the chatbot is like an expert on web
                  accessibility. It gives quick and useful advice.
                </p>
              </CustomCard>
              <CustomCard
                imgSrc="/dariel-vila.png"
                className="custom-horizontal-card"
                classTextContainer="text-container-horizontal"
                classEllipseBar="card-ellipse-bar"
                icon
              >
                <h3>Dariel Vila, CEO/Co-Founder at Front10 and Woxo</h3>
                <p>
                  alliWidget has made a significant impact for us. It's new, but
                  it consistently helps us with web accessibility. We're pleased
                  to have it as part of our toolkit.
                </p>
              </CustomCard>
            </div>
            <ImageDivider bottom variantBottomBlack />
          </div>
        </div>
      </div>
    </div>
  );
}

export { AlliWidget };

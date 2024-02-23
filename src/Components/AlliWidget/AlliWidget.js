import React from "react";
import { Helmet } from "react-helmet";
import Presentation from "../UI/Presentation/Presentation";
import BicolorTitledText from "../UI/BicolorTitledText/BicolorTitledText";
import CustomCard from "../UI/CustomCard/CustomCard";
import TryItNow from "../UI/TryItNow/TryItNow";
import './AlliWidget.css';
import { ImageDivider } from "../UI/ImageDivider/ImageDivider";
import Button from "../UI/Button/Button";
import { navigateToHome } from "../Utils/Utils";

function AlliWidget() {
  const servicesList = {
    title: "Struggling with Web Accessibility?",
    services: [
      {
        title: "Ever Felt Lost in Endless Documentation?",
        description:
          "You're navigating a labyrinth of complex guidelines, conflicting tutorials, and outdated articles. Each click feels like another wrong turn, trapping you deeper in a maze with no escape.",
      },
      {
        title: "Ever Felt Lost in Endless Documentation?",
        description:
          "You're navigating a labyrinth of complex guidelines, conflicting tutorials, and outdated articles. Each click feels like another wrong turn, trapping you deeper in a maze with no escape.",
      },
      {
        title: "Ever Felt Lost in Endless Documentation?",
        description:
          "You're navigating a labyrinth of complex guidelines, conflicting tutorials, and outdated articles. Each click feels like another wrong turn, trapping you deeper in a maze with no escape.",
      },
      {
        title: "Ever Felt Lost in Endless Documentation?",
        description:
          "You're navigating a labyrinth of complex guidelines, conflicting tutorials, and outdated articles. Each click feels like another wrong turn, trapping you deeper in a maze with no escape.",
      },
    ],
  };
  const featuresList = {
    title: "Enterprise features",
    features: [
      {
        title: "User Customization",
        description:
          "Allows users to adjust text size, contrast, and other visual elements according to their needs.",
        imgDiv: "/back-mac.png",
        classImgDivBrowser: "imgDiv-mac",
        className: "shadow-none custom-sized-image image-increase-height",
        imgSrc: "/user-customization.jpg",
      },
      {
        title: "WCAG 2.1 Compliance",
        description:
          "Ensures that your website meets the Web Content Accessibility Guidelines, reducing legal risks.",
        imgDiv: "/back-mac.png",
        classImgDivBrowser: "imgDiv-mac",
        className: "custom-sized-image",
        imgSrc: "/wcag-2.1-compliance.png",
      },
      {
        title: "Inclusivity",
        description:
          "Expands your potential customer base by making your website usable for people with disabilities.",
        imgDiv: "/back-mac.png",
        classImgDivBrowser: "imgDiv-mac",
        className: "custom-sized-image ",
        imgSrc: "/inclusivity.jpg",
      },
      {
        title: "User Experience",
        description:
          "Improves the overall user experience by making the website more navigable and understandable for all.",
        imgDiv: "/back-mac.png",
        classImgDivBrowser: "imgDiv-mac",
        className: "shadow-none custom-sized-image image-increase-height",
        imgSrc: "/user-experience.jpg",
      },
      {
        title: "Brand Reputation",
        description:
          "Enhances your brand image by showing a commitment to inclusivity and equality.",
        imgDiv: "/back-mac.png",
        classImgDivBrowser: "imgDiv-mac",
        className: "shadow-none custom-sized-image image-increase-height",
        imgSrc: "/brand-reputation.jpg",
      },
      {
        title: "Technical Support",
        description:
          "Provides 24/7 customer support to assist with any accessibility issues.",
        imgDiv: "/back-mac.png",
        classImgDivBrowser: "imgDiv-mac",
        className: "custom-sized-image",
        imgSrc: "/technical-support.jpg",
      },
    ],
  };
  const chooseList = {
    title: "Why Choose alliWidget? Unbeatable Features for Unparalleled Ease",
    chooses: [
      {
        title: "AI-Powered Precision",
        description:
          "Leverage the power of AI for pinpoint accuracy. alliWidget understands your queries and provides solutions that hit the mark, every time.",
      },
      {
        title: "AI-Powered Precision",
        description:
          "Leverage the power of AI for pinpoint accuracy. alliWidget understands your queries and provides solutions that hit the mark, every time.",
      },
      {
        title: "AI-Powered Precision",
        description:
          "Leverage the power of AI for pinpoint accuracy. alliWidget understands your queries and provides solutions that hit the mark, every time.",
      },
      {
        title: "AI-Powered Precision",
        description:
          "Leverage the power of AI for pinpoint accuracy. alliWidget understands your queries and provides solutions that hit the mark, every time.",
      },
      {
        title: "AI-Powered Precision",
        description:
          "Leverage the power of AI for pinpoint accuracy. alliWidget understands your queries and provides solutions that hit the mark, every time.",
      },
      {
        title: "AI-Powered Precision",
        description:
          "Leverage the power of AI for pinpoint accuracy. alliWidget understands your queries and provides solutions that hit the mark, every time.",
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
            title="Introducing AlliWidget, your ultimate automated Web Accessibility Solution"
            texts={[
              "Elevate the user experience with our accessibility widget, ensuring WCAG 2.1 compliance and universal web access.",
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

import React from "react";
import { Helmet } from "react-helmet";
import Presentation from "../UI/Presentation/Presentation";
import BicolorTitledText from "../UI/BicolorTitledText/BicolorTitledText";
import CustomCard from "../UI/CustomCard/CustomCard";
import TryItNow from "../UI/TryItNow/TryItNow";
import "./AlliWidget.css";
import { ImageDivider } from "../UI/ImageDivider/ImageDivider";
import ButtonRotatingBackgroundGradient from "../UI/ButtonRotatingBackgroundGradient/ButtonRotatingBackgroundGradient";
import VideoPresentation from "../UI/VideoPresentation/VideoPresentation";
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
        className: "feature-card custom-sized-image image-increase-height",
        imgSrc: "/quick _start.jpg",
      },
      {
        title: "Boost Compliance",
        description:
          "It enhances your site's compatibility with accessibility standards, reducing legal risks by addressing critical compliance areas effectively.",
        className: "shadow-none feature-card custom-sized-image",
        imgSrc: "/boot_compliance.png",
      },
      {
        title: "Affordable Approach",
        description:
          "Implement key accessibility features without a hefty investment, offering a cost-efficient solution to common accessibility hurdles.",
        className: "shadow-none feature-card custom-sized-image",
        imgSrc: "/affordable_approach.png",
      },
      {
        title: "Brand Integrity",
        description:
          "Improve your website's accessibility and demonstrate your commitment to inclusivity, positively impacting your brand's image.",
        className: "feature-card custom-sized-image image-increase-height",
        imgSrc: "/brand_integrity.png",
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

  const theCompetitionList = {
    title: "AlliWidget: Leading the Way",
    section_one: {
      title: "AlliWidget is not just another widget, it's a game-changer.",
      description:
        "Unlike anything you've seen before, AlliWidget includes Allibot, our AI-powered Web Accessibility Expert, setting a new standard in making the web accessible for everyone. Here's how we stand out:",
    },
    section_two: {
      title: "Beyond the Bot: Comprehensive Accessibility Auditing",
      description:
        "But our commitment to your website's accessibility doesn't end with Allibot. We also provide a manual audit, identifying and suggesting solutions for up to 10 accessibility issues that overlays might miss. This dual approach ensures your website achieves the highest accessibility standards, making AlliWidget the clear choice over the competition.",
    },
    list: [
      {
        description:
          "AI-Powered Precision: Allibot's cutting-edge AI technology understands and addresses your specific needs with unparalleled accuracy, providing solutions that precisely target your issues.",
      },
      {
        description:
          "Immediate Code Solutions: Instantly receive the code snippets you need directly from Allibot. Simply copy, paste, and resolve your web accessibility issues on the spot, no delays, no waiting.",
      },
      {
        description:
          "Up-to-Date Expertise: Stay ahead of the curve. Allibot's knowledge base is continuously updated, ensuring you're always in line with the latest web accessibility standards and practices.",
      },
      {
        description:
          "Enterprise-Level Reliability: Benefit from five years of proven experience and reliability that industries across the board trust, now accessible through an intuitive chat interface.",
      },
      {
        description:
          "Affordable Expertise: Why pay more for expert advice? Allibot delivers professional web accessibility consulting at a fraction of the cost, making expert knowledge accessible to all.",
      },
    ],
  };

  const frequentlyQuestion = {
    title: "Frequently Asked Questions",
    chooses: [
      {
        title: "How do I install AlliWidget on my website?",
        description:
          "Seamlessly integrate AlliWidget in two simple steps: begin with domain verification to secure your installation, followed by embedding a single line of code into your website's HTML. For guidance, our technical support team offers exemplary service to facilitate a smooth integration.",
      },
      {
        title: "How long does the installation process take?",
        description:
          "The installation of AlliWidget is designed for efficiency, ensuring immediate enhancement of your site’s accessibility upon completion of two brief steps.",
      },
      {
        title:
          "Can AlliWidget enable users with disabilities to use my website?",
        description:
          "Indeed, AlliWidget is expertly crafted to significantly elevate the accessibility of your website. It empowers individuals with disabilities with the ability to navigate, understand, and interact with your digital content effortlessly.",
      },
      {
        title: "Can AlliWidget help mitigate legal risk?",
        description:
          "AlliWidget provides a robust compliance framework, adhering to WCAG, ADA, and Section 508 standards, thus minimizing legal exposure. Our suite of accessibility tools is meticulously tailored to maintain your website’s adherence to current legal standards.",
      },
      {
        title: "Can a11ySolutions support me in my legal proceedings?",
        description:
          "a11ySolutions extends unparalleled customer support and technical expertise, offering strategic advice for legal accessibility concerns. Engage with our team for professional assistance tailored to your needs.",
      },
      {
        title: "Which types of disabilities does AlliWidget cover?",
        description:
          "AlliWidget offers a comprehensive accessibility solution, encompassing a spectrum of disabilities. From color vision deficiencies to cognitive impairments, our platform ensures your website is navigable and user-friendly for all visitors.",
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
          {/*<img
            alt="We work passionately on functional testing, accessibility testing, and automation testing services."
            className="alliWidget-image"
            src="/alliwidgets.png"
          />*/}
          <VideoPresentation
            sourceMp4="/alliWidget.mp4"
            sourceWebm="/alliWidget.webm"
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
          <ButtonRotatingBackgroundGradient
            className="presentation-button"
            ariaLabel={"Try now"}
            size="large"
            variant="dark"
            role="listitem"
            onClick={navigateToHome}
          >
            Try It Free
          </ButtonRotatingBackgroundGradient>
          {/*<Button
            size="large"
            onClick={navigateToHome}
            variant="negative"
            role="listitem"
          >
            Try It Free
            </Button>*/}
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
                className={f.className}
                imgSrc={f.imgSrc}
                classImgDivBrowser={f.classImgDivBrowser}
              >
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </CustomCard>
            ))}
          </div>
          <ButtonRotatingBackgroundGradient
            className="presentation-button"
            ariaLabel={"Try now"}
            size="large"
            variant="dark"
            role="listitem"
            onClick={navigateToHome}
          >
            Try It Free
          </ButtonRotatingBackgroundGradient>
          {/*<Button
            size="large"
            onClick={navigateToHome}
            variant="dark"
            role="listitem"
          >
            Try It Free
            </Button>*/}
        </div>

        {/* =============== AlliWidget-why-choose ===============  */}
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

        {/* =============== Alliwidget vs. The Competition ===============  */}
        <div className="alliWidget-competition" role="list">
          <div className="alliWidget-competition-content">
            <img
              alt="We work passionately on functional testing, accessibility testing, and automation testing services."
              className="alliWidget-competition-image"
              src="/competitors_section.png"
            />
            <div role="listitem">
              <h2 className="competition-title">{theCompetitionList.title}</h2>
              <p className="competition-text-content">
                <span className="competition-subtitle">
                  {theCompetitionList.section_one.title}
                </span>
                <br />
                {theCompetitionList.section_one.description}
              </p>
              <ul>
                {theCompetitionList.list.map((c) => (
                  <li>
                    <p className="competition-text-content">{c.description}</p>
                  </li>
                ))}
              </ul>
              <p className="competition-text-content">
                <span className="competition-subtitle">
                  {theCompetitionList.section_two.title}
                </span>
                <br /> {theCompetitionList.section_two.description}
              </p>
            </div>
          </div>
          <ImageDivider top variantTopBlack />
        </div>

        {/* =============== alliWidget-Frequently-Asked-Questions ===============  */}
        <div key={2} className="alliWidget-why-choose" role="list">
          <div className="home-services-bicolored-text" role="listitem">
            <BicolorTitledText
              color2="#fff"
              color2Text={frequentlyQuestion.title}
              className="home-our-services"
            ></BicolorTitledText>
          </div>
          <div className="alliWidget-why-choose-content">
            {frequentlyQuestion.chooses.map((c, index) => (
              <CustomCard key={index} className="accessibility-item">
                <h3>{c.title}</h3>
                <p>{c.description}</p>
              </CustomCard>
            ))}
          </div>

          <ImageDivider bottom top variantBottomBlack />
        </div>

        {/* =============== tryItNow ===============  */}
        <TryItNow
          handleNavigate={navigateToHome}
          text="Give it a try for free"
          buttonText="Try It Now"
        >
          <ImageDivider top bottom variantTopBlack />
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
                  We just started using AlliWidget and it's already helping us a
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
                  We recently started using AlliWidget and we're very happy.
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
                  AlliWidget has made a significant impact for us. It's new, but
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

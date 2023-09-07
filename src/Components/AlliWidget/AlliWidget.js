import React from 'react'
import { Helmet } from 'react-helmet'
import Presentation from '../UI/Presentation/Presentation'
import HomeIlustration from '../UI/HomeIlustration/HomeIlustration'
import BicolorTitledText from '../UI/BicolorTitledText/BicolorTitledText'
import CustomCard from '../UI/CustomCard/CustomCard'
import { navigateToHome } from '../Utils/Utils'
import TryItNow from '../UI/TryItNow/TryItNow'
import './AlliWidget.css'

function AlliWidget() {
  return (
    <div id="alliWidget" className="alliWidget-page-container">
      <Helmet>
        <title>AlliWidget - Your ultimate automated Web Accessibility Solution | A11ysolutions</title>
      </Helmet>

      {/* =============== alliWidget-presentation-container =============== */}
      <div className="alliWidget-presentation-container">
        <div className="page-top">
          <Presentation
            title="Introducing AlliWidget, your ultimate automated Web Accessibility Solution"
            texts={[
              'Elevate the user experience with our accessibility widget, ensuring WCAG 2.1 compliance and universal web access.',
            ]}
            buttonText="TRY IT NOW"
            handleClick={navigateToHome}
            className="alliWidget-presentation-sign"
          />
        </div>
        <div className="privacy-policy-ilustration-container">
          <HomeIlustration src="/alliWidget.png" />
        </div>
      </div>

      {/* =============== alliWidget-content ===============  */}
      <div className="alliWidget-content">
        <div className="home-services-bicolored-text">
          <BicolorTitledText
            color1="black"
            color2="#0D9E71"
            // color1Text="ENTERPRISE FEATURES"
            color2Text="Enterprise features"
            className="home-our-services"
          >
            <p>Some awesome features</p>
          </BicolorTitledText>
        </div>

        {/* =============== alliWidget-features ===============  */}
        <div className="alliWidget-features" role="list">
          <CustomCard
            imgSrc="/user-customization.jpg"
            imgDiv="/back-mac.png"
            classImgDivBrowser="imgDiv-mac"
            className=""
          >
            <h3>User Customization</h3>
            <p>
              Allows users to adjust text size, contrast, and other visual elements according to their needs.
            </p>
          </CustomCard>
          <CustomCard
            imgSrc="/wcag-2.1-compliance.png"
            imgDiv="/back-browser.png"
            classImgDivBrowser="imgDiv-browser"
            className="shadow-none image-fit-contained"
          >
            <h3>WCAG 2.1 Compliance</h3>
            <p>
              Ensures that your website meets the Web Content Accessibility Guidelines, reducing legal risks.
            </p>
          </CustomCard>
          <CustomCard
            imgSrc="/inclusivity.jpg"
            imgDiv="/back-mac.png"
            classImgDivBrowser="imgDiv-mac"
            className="shadow-none"
          >
            <h3>Inclusivity</h3>
            <p>
              Expands your potential customer base by making your website usable for people with disabilities.
            </p>
          </CustomCard>
          <CustomCard
            imgSrc="/user-experience.jpg"
            imgDiv="/back-browser.png"
            classImgDivBrowser="imgDiv-browser"
            className="image-increase-height"
          >
            <h3>User Experience</h3>
            <p>
              Improves the overall user experience by making the website more navigable and understandable for
              all.
            </p>
          </CustomCard>
          <CustomCard
            imgSrc="/brand-reputation.jpg"
            imgDiv="/back-mac.png"
            classImgDivBrowser="imgDiv-mac"
            className=""
          >
            <h3>Brand Reputation</h3>
            <p>Enhances your brand image by showing a commitment to inclusivity and equality.</p>
          </CustomCard>
          <CustomCard
            imgSrc="/technical-support.jpg"
            imgDiv="/back-browser.png"
            classImgDivBrowser="imgDiv-browser"
            className="shadow-none image-increase-height"
          >
            <h3>Technical Support</h3>
            <p>Provides 24/7 customer support to assist with any accessibility issues.</p>
          </CustomCard>
        </div>

        {/* =============== tryItNow ===============  */}
        <TryItNow handleNavigate={navigateToHome} buttonText="TRY IT NOW" />
      </div>
    </div>
  )
}

export default AlliWidget

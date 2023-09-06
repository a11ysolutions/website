import React from 'react'
import './A11yWidget.css'
import { Helmet } from 'react-helmet'
import Presentation from '../UI/Presentation/Presentation'
import HomeIlustration from '../UI/HomeIlustration/HomeIlustration'
import BicolorTitledText from '../UI/BicolorTitledText/BicolorTitledText'
import CustomCard from '../UI/CustomCard/CustomCard'
import Button from '../UI/Button/Button'
import { navigateToHome } from '../Utils/Utils'

function A11yWidget() {
  return (
    <div id="a11yWidget" className="a11yBot-page-container">
      <Helmet>
        <title>AlliWidget - Your ultimate automated Web Accessibility Solution | A11ysolutions</title>
      </Helmet>

      <div className="a11yBot-presentation-container">
        <div className="page-top">
          <Presentation
            title="Introducing AlliWidget, your ultimate automated Web Accessibility Solution"
            texts={[
              'Elevate the user experience with our accessibility widget, ensuring WCAG 2.1 compliance and universal web access.',
            ]}
            buttonText="TRY IT NOW"
            handleClick={navigateToHome}
            className="a11yBot-presentation-sign"
          />
        </div>
        <div className="privacy-policy-ilustration-container">
          <HomeIlustration src="/a11yWidget.png" />
        </div>
      </div>

      <div className="a11yBot-container">
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

        <div className="a11yBot-features">
          <CustomCard imgSrc="/user-customization.jpg" className="">
            <h3>User Customization</h3>
            <p>
              Allows users to adjust text size, contrast, and other visual elements according to their needs.
            </p>
          </CustomCard>
          <CustomCard imgSrc="/wcag-2.1-compliance.png" className="shadow-none">
            <h3>WCAG 2.1 Compliance</h3>
            <p>
              Ensures that your website meets the Web Content Accessibility Guidelines, reducing legal risks.
            </p>
          </CustomCard>
          <CustomCard imgSrc="/inclusivity.jpg" className="shadow-none">
            <h3>Inclusivity</h3>
            <p>
              Expands your potential customer base by making your website usable for people with disabilities.
            </p>
          </CustomCard>
          <CustomCard imgSrc="/user-experience.jpg" className="">
            <h3>User Experience</h3>
            <p>
              Improves the overall user experience by making the website more navigable and understandable for
              all.
            </p>
          </CustomCard>
          <CustomCard imgSrc="/brand-reputation.jpg" className="">
            <h3>Brand Reputation</h3>
            <p>Enhances your brand image by showing a commitment to inclusivity and equality.</p>
          </CustomCard>
          <CustomCard imgSrc="/technical-support.jpg" className="shadow-none">
            <h3>Technical Support</h3>
            <p>Provides 24/7 customer support to assist with any accessibility issues.</p>
          </CustomCard>
        </div>

        <div className="a11yBot-tryNow">
          <div className="a11yBot-tryNow-container">
            <h2 className="a11yBot-tryNow-text">Give it a try for free</h2>
            <Button size="large" onClick={navigateToHome}>
              TRY IT NOW
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default A11yWidget

import React from 'react'
import BicolorTitledText from '../UI/BicolorTitledText/BicolorTitledText'
import FeedbackForm from '../UI/FeedbackForm/FeedbackForm'
import { Helmet } from 'react-helmet'
import HomeIlustration from '../UI/HomeIlustration/HomeIlustration'
import Presentation from '../UI/Presentation/Presentation'
import { navigateToAlliBot } from '../Utils/Utils'
import { ImageDivider } from '../UI/ImageDivider/ImageDivider'
import './AlliBotFeedback.css'

export const AlliBotFeedback = () => {
  return (
    <div id="feedback" className="feedback-page-container">
      <Helmet>
        <title>A11iBot Feedback - Empowering Inclusive Experiences | A11ysolutions</title>
      </Helmet>

      {/* =============== feedback-presentation-container =============== */}
      <div className="feedback-presentation-container">
        <div className="page-top">
          <Presentation
            title="Contribute to Our Mission: Building a More Accessible World"
            texts={['Your Insights Can Shape the Future of Web Accessibility.']}
            handleClick={navigateToAlliBot}
            buttonText="Try It Free"
            className="feedback-presentation-sign"
          />
        </div>
        <div className="privacy-policy-ilustration-container">
          <HomeIlustration src="/alliBot.svg" />
        </div>
      </div>

      {/* =============== feedback-content ===============  */}
      <div className="feedback-content">
        <div className="feedback">
          <div className="home-services-bicolored-text">
            <BicolorTitledText color1="black" color2="#0D9E71" className="home-our-services">
              <h2>Your Voice Matters in Creating a More Inclusive World</h2>
            </BicolorTitledText>
          </div>

          <div className="feedback-main">
            <div className="feedback-intro">
              <div>
                <p>
                  Your insights don't just help us improve A11iBot; they contribute to our broader mission of
                  making the digital world more accessible for everyone. Whether it's a suggestion, question,
                  or praise, your voice matters in shaping a more inclusive future. Please share your
                  feedback.
                </p>
                <p>Thank you for your thoughtful contribution!</p>
              </div>
            </div>

            <div className="feedback-form" id="footer-feedback-form">
              <FeedbackForm />
            </div>
          </div>

          <div className="feedback-privacy-statement ">
            <p>
              Privacy Statement: Your privacy is important to us. The information you provide in this feedback
              form will be used solely for the purpose of improving A11iBot and our services. We will not
              share, sell, or distribute your personal information to any third parties without your explicit
              consent. For more details, please read our{' '}
              <a href="/privacy-policy" className="feedback-link">
                Privacy Policy .
              </a>
            </p>
          </div>
        </div>

        <ImageDivider top bottom variantTopGreen variantBottomBlack />
      </div>
    </div>
  )
}

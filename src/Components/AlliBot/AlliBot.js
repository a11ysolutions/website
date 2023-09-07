import React from 'react'
import { Helmet } from 'react-helmet'
import HomeIlustration from '../UI/HomeIlustration/HomeIlustration'
import Presentation from '../UI/Presentation/Presentation'
import BicolorTitledText from '../UI/BicolorTitledText/BicolorTitledText'
import CustomCard from '../UI/CustomCard/CustomCard'
import FeedbackForm from '../UI/FeedbackForm/FeedbackForm'
import { navigateToAlliBot } from '../Utils/Utils'
import TryItNow from '../UI/TryItNow/TryItNow'
import './AlliBot.css'

function AlliBot() {
  return (
    <div id="alliBot" className="alliBot-page-container">
      <Helmet>
        <title>AlliBot - Empowering Inclusive Experiences | A11ysolutions</title>
      </Helmet>

      {/* =============== alliBot-presentation-container =============== */}
      <div className="alliBot-presentation-container">
        <div className="page-top">
          <Presentation
            title="AlliBot - Empowering Inclusive Experiences"
            texts={[
              'A chatbot designed to provide assistance and answer any accessibility questions based on the WCAG 2.1 Standard.',
            ]}
            handleClick={navigateToAlliBot}
            buttonText="TRY IT NOW"
            className="alliBot-presentation-sign"
          />
        </div>
        <div className="privacy-policy-ilustration-container">
          <HomeIlustration src="/alliBot.svg" />
        </div>
      </div>

      {/* =============== alliBot-content ===============  */}
      <div className="alliBot-content">
        <div className="home-services-bicolored-text">
          <BicolorTitledText
            color1="black"
            color2="#0D9E71"
            color2Text="Enterprise features"
            className="home-our-services"
          >
            <p>Some awesome features</p>
          </BicolorTitledText>
        </div>

        {/* =============== alliBot-features ===============  */}
        <div className="alliBot-features" role="list">
          <CustomCard
            imgSrc="/instant-accessibility-responses.png"
            imgDiv="/back-mac.png"
            classImgDivBrowser="imgDiv-mac"
            className="custom-img-first"
          >
            <h3>Instant Accessibility Responses</h3>
            <p>
              Immediate, real-time feedback on any web accessibility queries or issues you may have. Whether
              you're a developer looking to ensure your website meets accessibility standards or a tester
              trying to identify potential issues.
            </p>
          </CustomCard>
          <CustomCard
            imgSrc="/expert-guidance.png"
            imgDiv="/back-browser.png"
            classImgDivBrowser="imgDiv-browser"
            className="shadow-none image-increase-height"
          >
            <h3>Expert Guidance</h3>
            <p>
              Benefit from the expertise of our AI-powered chatbot, meticulously engineered to comply with
              WCAG 2.1 Standards, ensuring inclusivity for all users.
            </p>
          </CustomCard>
          <CustomCard
            imgSrc="/user-friendly-interface.png"
            imgDiv="/back-mac.png"
            classImgDivBrowser="imgDiv-mac"
            className="shadow-none"
          >
            <h3>User-Friendly Interface</h3>
            <p>
              AlliBot features an intuitive interface, making it easy for users to interact and seek
              assistance.
            </p>
          </CustomCard>
          <CustomCard
            imgSrc="/multi-platform-support.png"
            imgDiv="/back-browser.png"
            classImgDivBrowser="imgDiv-browser"
            className=""
          >
            <h3>Multi-platform Support</h3>
            <p>Access our chatbot from various devices and platforms, ensuring accessibility on the go.</p>
          </CustomCard>
        </div>

        {/* =============== tryItNow ===============  */}
        <TryItNow handleNavigate={navigateToAlliBot} buttonText="TRY IT NOW" />

        {/* =============== alliBot-feedback ===============  */}
        <div className="alliBot-feedback">
          <div className="home-services-bicolored-text">
            <BicolorTitledText color1="black" color2="#0D9E71" className="home-our-services">
              <h2>We are committed to creating a world that is both inclusive and equitable for everyone.</h2>
            </BicolorTitledText>
          </div>

          <div className="alliBot-feedback-content">
            <div className="alliBot-feedback-text">
              <div>
                <p>
                  Your feedback on AlliBot is invaluable to us and instrumental in refining its capabilities.
                  Please share your experience to help us enhance the service for you and others.
                </p>
                <p>Thank you for your thoughtful contribution!</p>
              </div>
            </div>
            <div className="alliBot-feedback-form" id="footer-feedback-form">
              <FeedbackForm />
            </div>
          </div>
        </div>

        {/* =============== alliBot-review ===============  */}
        <div className="alliBot-review">
          <div className="alliBot-review-header">
            <div className="home-services-bicolored-text">
              <BicolorTitledText
                color1="black"
                color2=""
                color2Text="Some awesome reviews"
                className="home-our-services"
              ></BicolorTitledText>
            </div>

            <div className="alliBot-review-content" role="list">
              <CustomCard
                imgSrc="/yainery-bolanos.png"
                className="custom-horizontal-card"
                classTextContainer="text-container-horizontal"
                classEllipseBar="card-ellipse-bar"
                icon
              >
                <h3>Yainery Bolanos, CEO/Co-Founder at Adaved</h3>
                <p>
                  We just started using AlliBot and it's already helping us a lot. It's like having a
                  specialist with us all the time, making our work faster and better.
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
                  We recently started using AlliBot and we're very happy. Even in its MVP stage, the chatbot
                  is like an expert on web accessibility. It gives quick and useful advice.
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
                  AlliBot has made a significant impact for us. It's new, but it consistently helps us with
                  web accessibility. We're pleased to have it as part of our toolkit.
                </p>
              </CustomCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlliBot

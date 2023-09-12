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
            title="Meet AlliBot: The Chatbot Transforming Web Accessibility"
            texts={[
              'Navigate the complexities of web accessibility effortlessly with AI-powered expertise. AlliBot is your on-demand guide, offering both theoretical insights and practical solutions for instant compliance.',
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
        {/* =============== alliBot-features ===============  */}
        <div className="alliBot-features" role="list">
          <div className="home-services-bicolored-text" role="listitem">
            <BicolorTitledText
              color1="#0D9E71"
              color1Text="Why Choose AlliBot for Your Web Accessibility Needs?"
              className="home-our-services"
            ></BicolorTitledText>
          </div>

          <div className="standalone-card">
            <CustomCard className="">
              <h3>Backed by Industry Experts</h3>
              <p>
                The team behind AlliBot brings years of combined experience in web accessibility and AI
                technology. We've collaborated with top industry leaders to ensure that AlliBot is not just
                smart, but also reliable and effective.
              </p>
            </CustomCard>
          </div>

          <div className="alliBot-features-content">
            <CustomCard
              imgSrc="/instant-accessibility-responses.png"
              imgDiv="/back-mac.png"
              classImgDivBrowser="imgDiv-mac"
              className="custom-sized-image"
            >
              <h3>Get Answers Right Away</h3>
              <p>
                Whether you're a developer trying to meet WCAG standards or a tester finding accessibility
                flaws, AlliBot delivers immediate and accurate answers. No more sifting through forums or
                waiting for email responses—get the info you need instantly.
              </p>
            </CustomCard>
            <CustomCard
              imgSrc="/expert-guidance.png"
              imgDiv="/back-browser.png"
              classImgDivBrowser="imgDiv-browser"
              className="shadow-none image-increase-height"
            >
              <h3>Industry-Backed Expertise</h3>
              <p>
                AlliBot isn't just smart—it's trained on the latest WCAG standards to ensure you're getting
                reliable, up-to-date advice. That means you can focus on creating a more inclusive web
                environment without second-guessing your decisions.
              </p>
            </CustomCard>
            <CustomCard
              imgSrc="/user-friendly-interface.png"
              imgDiv="/back-mac.png"
              classImgDivBrowser="imgDiv-mac"
              className="shadow-none"
            >
              <h3>Simple and Easy to Use</h3>
              <p>
                We know that web accessibility can be complex. That's why we’ve designed AlliBot’s user
                interface to be as straightforward as possible. Navigate through solutions effortlessly,
                whether you're an accessibility expert or just getting started.
              </p>
            </CustomCard>
            <CustomCard
              imgSrc="/multi-platform-support.png"
              imgDiv="/back-browser.png"
              classImgDivBrowser="imgDiv-browser"
              className=""
            >
              <h3>Always Accessible, On Any Device</h3>
              <p>
                Need help while you're on the go? AlliBot has you covered. Our chatbot works seamlessly across
                a variety of devices, from laptops to smartphones, so you can get the support you need,
                whenever you need it.
              </p>
            </CustomCard>
          </div>
        </div>

        {/* =============== tryItNow ===============  */}
        <TryItNow handleNavigate={navigateToAlliBot} buttonText="TRY IT NOW" />

        {/* =============== alliBot-feedback ===============  */}
        <div className="alliBot-feedback">
          <div className="home-services-bicolored-text">
            <BicolorTitledText color1="black" color2="#0D9E71" className="home-our-services">
              <h2>Your Voice Matters in Creating a More Inclusive World</h2>
            </BicolorTitledText>
          </div>

          <div className="alliBot-feedback-content">
            <div className="alliBot-feedback-text">
              <div>
                <p>
                  Your insights don't just help us improve AlliBot; they contribute to our broader mission of
                  making the digital world more accessible for everyone. Whether it's a suggestion, question,
                  or praise, your voice matters in shaping a more inclusive future. Please share your
                  feedback.
                </p>
                <p>Thank you for your thoughtful contribution!</p>
              </div>
            </div>
            <div className="alliBot-feedback-form" id="footer-feedback-form">
              <FeedbackForm />
            </div>
          </div>
          <div className="privacy-statement ">
            <p>
              Privacy Statement: Your privacy is important to us. The information you provide in this feedback
              form will be used solely for the purpose of improving AlliBot and our services. We will not
              share, sell, or distribute your personal information to any third parties without your explicit
              consent. For more details, please read our{' '}
              <a href="/privacy-policy" className="feedback-link">
                Privacy Policy .
              </a>
            </p>
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

import React from 'react'
import { Helmet } from 'react-helmet'
import HomeIlustration from '../UI/HomeIlustration/HomeIlustration'
import Presentation from '../UI/Presentation/Presentation'
import BicolorTitledText from '../UI/BicolorTitledText/BicolorTitledText'
import CustomCard from '../UI/CustomCard/CustomCard'
import { navigateToAlliBot } from '../Utils/Utils'
import TryItNow from '../UI/TryItNow/TryItNow'
import './AlliBot.css'
import { ImageDivider } from '../UI/ImageDivider/ImageDivider'
import Button from '../UI/Button/Button'

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
            title="Need Quick Solutions for Web Accessibility?"
            texts={['Unlock Instant Answers with AlliBot, Your AI-Powered Web Accessibility Expert.']}
            handleClick={navigateToAlliBot}
            buttonText="Try It Free"
            className="alliBot-presentation-sign"
          />
        </div>
        <div className="privacy-policy-ilustration-container">
          <HomeIlustration src="/alliBot.svg" />
        </div>
      </div>

      {/* =============== alliBot-content ===============  */}
      <div className="alliBot-content">
        
        {/* =============== alliBot-accessibility ===============  */}
        <div className="alliBot-accessibility" role="list">
          <div className="home-services-bicolored-text" role="listitem">
            <BicolorTitledText
              color2="#fff"
              color2Text="Struggling with Web Accessibility?"
              className="home-our-services"
            ></BicolorTitledText>
          </div>
          <div className="alliBot-accessibility-content">
            <CustomCard className="accessibility-item">
              <h3>Ever Felt Lost in Endless Documentation?</h3>
              <p>
                You're navigating a labyrinth of complex guidelines, conflicting tutorials, and outdated
                articles. Each click feels like another wrong turn, trapping you deeper in a maze with no
                escape.
              </p>
            </CustomCard>
            <CustomCard className="accessibility-item">
              <h3>Anxious About Compliance Risks?</h3>
              <p>
                The looming threat of legal actions and penalties hangs over you like a dark cloud. Each
                project feels like a gamble, a tightrope walk over a chasm of financial and reputational ruin.
              </p>
            </CustomCard>
            <CustomCard className="accessibility-item">
              <h3>Struggling to Keep Up with Constant Updates?</h3>
              <p>
                Just when you've finally caught up, the goalposts move. New updates roll out, and you're back
                at square one, scrambling to relearn what you thought you already knew.
              </p>
            </CustomCard>
            <CustomCard className="accessibility-item">
              <h3>Tired of Expensive Consultants?</h3>
              <p>
                Your budget is bleeding, drained by hefty fees that promise expertise but often underdeliver.
                It's like being stuck in a financial sinkhole that keeps pulling you deeper into debt.
              </p>
            </CustomCard>
          </div>

          <Button size="large" onClick={navigateToAlliBot} variant="negative" role="listitem">
            Try It Free
          </Button>

          <ImageDivider top bottom variantTopGreen />
        </div>

        {/* =============== alliBot-features ===============  */}
        <div className="alliBot-features" role="list">
          <div className="home-services-bicolored-text" role="listitem">
            <BicolorTitledText
              color1="#0D9E71"
              color1Text="Introducing AlliBot: The easiest way to solve your Web Accessibility Needs"
              className="home-our-services"
            ></BicolorTitledText>
          </div>

          <div className="alliBot-features-content">
            <CustomCard
              imgSrc="/instant-accessibility-responses.png"
              imgDiv="/back-mac.png"
              classImgDivBrowser="imgDiv-mac"
              className="custom-sized-image"
            >
              <h3>Cut Through the Documentation Jungle</h3>
              <p>
                Lost in a maze of accessibility guidelines? Whether you're a developer working to meet Web
                Content Accessibility Guidelines (WCAG) or a tester looking to identify accessibility flaws,
                AlliBot has you covered. Get immediate, accurate answers and make your web content more
                accessible efforlessly.
              </p>
            </CustomCard>
            <CustomCard
              imgSrc="/expert-guidance.png"
              imgDiv="/back-browser.png"
              classImgDivBrowser="imgDiv-browser"
              className="shadow-none image-increase-height"
            >
              <h3>Eliminate Compliance Nightmares</h3>
              <p>
                Legal worries? Set them aside with AlliBot. Specializing in the latest WCAG guidelines,
                AlliBot assists you in achieving compliance with laws like ADA, Section 508, and EAA, among
                others. AlliBot provides code snippets that are compliant with the latest standards, all
                backed by 5 years of enterprise-level expertise.
              </p>
            </CustomCard>
            <CustomCard
              imgSrc="/user-friendly-interface.png"
              imgDiv="/back-mac.png"
              classImgDivBrowser="imgDiv-mac"
              className="shadow-none"
            >
              <h3>Stay Ahead of the Ever-Changing Game</h3>
              <p>
                Adapt instantly to new Standard/Laws updates with code solutions that are always up-to-date.
                [Your Chatbot's Name] keeps you ahead of the curve, so you never have to play catch-up.
              </p>
            </CustomCard>
            <CustomCard
              imgSrc="/multi-platform-support.png"
              imgDiv="/back-browser.png"
              classImgDivBrowser="imgDiv-browser"
              className=""
            >
              <h3>Break Free from the Costly Consultant Trap</h3>
              <p>
                Forget about those expensive consultants. [Your Chatbot's Name] offers you guidance and code
                solutions you need at a fraction of the cost, directly in your chat window.
              </p>
            </CustomCard>
          </div>

          <Button size="large" onClick={navigateToAlliBot} variant="dark" role="listitem">
            Try It Free
          </Button>
        </div>

        {/* =============== alliBot-why-choose ===============  */}
        <div className="alliBot-why-choose" role="list">
          <div className="home-services-bicolored-text" role="listitem">
            <BicolorTitledText
              color2="#fff"
              color2Text="Why Choose Allibot? Unbeatable Features for Unparalleled Ease"
              className="home-our-services"
            ></BicolorTitledText>
          </div>
          <div className="alliBot-why-choose-content">
            <CustomCard className="why-choose-item custom-why-choose-card">
              <h3>AI-Powered Precision</h3>
              <p>
                Leverage the power of AI for pinpoint accuracy. Allibot understands your queries and provides
                solutions that hit the mark, every time.
              </p>
            </CustomCard>
            <CustomCard className="why-choose-item custom-why-choose-card">
              <h3>Immediate Code Solutions</h3>
              <p>
                Why wait? Allibot delivers real-time code snippets right in the chat. Just copy, paste, and
                watch your accessibility issues disappear.
              </p>
            </CustomCard>
            <CustomCard className="why-choose-item custom-why-choose-card">
              <h3>Up-to-Date Expertise</h3>
              <p>
                Never worry about outdated information. Allibot is continuously updated to reflect the latest
                web accessibility standards and practices.
              </p>
            </CustomCard>
            <CustomCard className="why-choose-item custom-why-choose-card">
              <h3>Enterprise-Level Reliability</h3>
              <p>
                Rely on the same expertise trusted by major industries, from airlines to banks. Allibot brings
                you 5 years of proven experience in a user-friendly chat interface.
              </p>
            </CustomCard>
            <CustomCard className="why-choose-item custom-why-choose-card">
              <h3>Affordable Expertise</h3>
              <p>
                Get top-notch accessibility advice without the top-tier price tag. Allibot provides expert
                solutions at a fraction of the cost of traditional consulting.
              </p>
            </CustomCard>
            <CustomCard className="why-choose-item custom-why-choose-card">
              <h3>24/7 Accessibility</h3>
              <p>
                Questions don't keep office hours, and neither does Allibot. Get the answers you need, any
                time of the day or night.
              </p>
            </CustomCard>
          </div>

          <ImageDivider top />
        </div>

        {/* =============== tryItNow ===============  */}
        <TryItNow handleNavigate={navigateToAlliBot} text="Give it a try for free" buttonText="Try It Now">
          <ImageDivider top variantTopBlack bottom />
        </TryItNow>

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
            <ImageDivider bottom variantBottomBlack />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlliBot

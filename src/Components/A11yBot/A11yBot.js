import React from 'react'
import { Helmet } from 'react-helmet'
import HomeIlustration from '../UI/HomeIlustration/HomeIlustration'
import Presentation from '../UI/Presentation/Presentation'
import BicolorTitledText from '../UI/BicolorTitledText/BicolorTitledText'
import CustomCard from '../UI/CustomCard/CustomCard'
import Button from '../UI/Button/Button'
import './A11yBot.css'

function A11yBot() {
  return (
    <div className="a11yBot-page-container">
      <Helmet>
        <title>a11yBot - Empowering Inclusive Experiences | A11ysolutions</title>
      </Helmet>

      <div className="a11yBot-presentation-container">
        <div className="page-top">
          <Presentation
            title="a11yBot - Empowering Inclusive Experiences"
            texts={[
              'A chatbot designed to provide assistance and answer any accessibility questions based on the WCAG 2.1 Standard.',
            ]}
            buttonText="Get a free consultation"
            className="a11yBot-presentation-sign"
          />
        </div>
        <div className="privacy-policy-ilustration-container">
          <HomeIlustration src="/a11yBot.png" />
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
          <CustomCard imgSrc="/instant-accessibility-responses.jpg" className="">
            <h3>Instant Accessibility Responses</h3>
            <p>
              Immediate, real-time feedback on any web accessibility queries or issues you may have. Whether
              you're a developer looking to ensure your website meets accessibility standards or a tester
              trying to identify potential issues.
            </p>
          </CustomCard>
          <CustomCard imgSrc="/expert-guidance.png" className="shadow-none">
            <h3>Expert Guidance</h3>
            <p>
              Benefit from the expertise of our AI-powered chatbot, meticulously engineered to comply with
              WCAG 2.1 Standards, ensuring inclusivity for all users.
            </p>
          </CustomCard>
          <CustomCard imgSrc="/user-friendly-interface.jpg" className="shadow-none">
            <h3>User-Friendly Interface</h3>
            <p>
              a11yBot features an intuitive interface, making it easy for users to interact and seek
              assistance.
            </p>
          </CustomCard>
          <CustomCard imgSrc="/multi-platform-support.jpg" className="">
            <h3>Multi-platform Support</h3>
            <p>Access our chatbot from various devices and platforms, ensuring accessibility on the go.</p>
          </CustomCard>
        </div>

        <div className="a11yBot-tryNow">
          <div className="a11yBot-tryNow-container">
            <h1>Give it a try for free</h1>
            <Button size="large">TRY IT NOW</Button>
          </div>
        </div>

        <div className="a11yBot-review">
          <div className="home-services-bicolored-text">
            <BicolorTitledText color1="black" color2="#0D9E71" className="home-our-services">
              <p>Some awesome reviews</p>
            </BicolorTitledText>
          </div>

          <div className="a11yBot-review-container">
            <CustomCard
              imgSrc="/yainery-bolanos.png"
              className="custom-horizontal-card"
              classTextContainer="text-container-horizontal"
              classEllipseBar="card-ellipse-bar"
              icon
            >
              <h3>Yainery Bolanos, CEO/Co-Founder at Adaved</h3>
              <p>
                a11yBot has streamlined our workflow, helped our team to ensure compliance and even educated
                them around web accessibility. I highly recommend it to any organization that is serious about
                making the web a more inclusive space.
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
                a11yBot has empowered us to be proactive rather than reactive when it comes to accessibility.
                This is not just a problem-solving tool, it's an educational resource, the chatbot have helped
                our team deepen their understanding of web accessibility.
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
                a11yBot has been a game-changer for us. One of the significant challenges we've faced is the
                need for quick, accurate answers to complex accessibility questions and a11yBot has been
                invaluable in this regard, providing us with instant and precise solutions to any web
                accessibility query we throw at it, saving us countless hours of research and potential trial
                and error.
              </p>
            </CustomCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default A11yBot

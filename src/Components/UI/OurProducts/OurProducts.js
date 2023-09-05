import React from 'react'
import BicolorTitledText from '../BicolorTitledText/BicolorTitledText'
import Button from '../Button/Button'
import './OurProducts.css'

function OurProducts() {
  return (
    <div id="our-products" className="our-products-page-container">
      <div className="home-services-bicolored-text">
        <BicolorTitledText
          className="our-products-biColor"
          color1="black"
          color2="#0D9E71"
          color1Text="Our"
          color2Text="products"
        ></BicolorTitledText>
      </div>

      <div className="our-products">
        <div className="our-products-container">
          <div className="our-products-item_photo">
            <img
              src="/alliBot.png"
              className=""
              alt="No more endless Googling or diving into forums for answers to your web accessibility questions. a11yBot provides immediate, expert guidance, effectively becoming your on-demand accessibility consultant."
              style={{}}
            />
          </div>
          <div className="our-products-item_text">
            <h3>AlliBot: Your AI-driven expert for instant and tailored accessibility solutions</h3>
            <p>
              No more endless Googling or diving into forums for answers to your web accessibility questions.
              a11yBot provides immediate, expert guidance, effectively becoming your on-demand accessibility
              consultant.
            </p>
            <Button onClick={() => (document.location.href = '/alliBot')} size="large">
              Learn More
            </Button>
          </div>
        </div>

        <div className="our-products-container reverse">
          <div className="our-products-item_photo">
            <img
              src="/a11yWidget.png"
              className=""
              alt="Provide real-time accessibility adjustments. The AlliWidget ensures that all visitors, regardless of their abilities, can interact with your site effortlessly. By integrating our Accessibility Widget, you're not just adding a feature to your website; you're elevating the entire user experience."
              style={{}}
            />
          </div>
          <div className="our-products-item_text">
            <h3>AlliWidget: Real-Time Solutions, Zero Delays</h3>
            <p>
              Provide real-time accessibility adjustments. The AlliWidget ensures that all visitors,
              regardless of their abilities, can interact with your site effortlessly. By integrating our
              Accessibility Widget, you're not just adding a feature to your website; you're elevating the
              entire user experience.
            </p>
            <Button onClick={() => (document.location.href = '/alliWidget')} size="large">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurProducts

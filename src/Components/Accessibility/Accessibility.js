import React from "react"
import AchievementCard from "../UI/AchievementCard/AchievementCard"
import BicolorTitledText from "../UI/BicolorTitledText/BicolorTitledText"
import Button from "../UI/Button/Button"
// import CardButton from "../UI/CardButton/CardButton"
import CheckedItem from "../UI/CheckedItem/CheckedItem"
import Illustration from "../UI/Illustration/Illustration"
import Presentation from "../UI/Presentation/Presentation"
import Toolset from "../UI/Toolset/Toolset"

import { Helmet } from "react-helmet";
import { scrollToContactForm } from "../Utils/Utils"

import "./Accessibility.css";

function Accessibility() {
    return (
        <div id='automation-main' className='page-container' >
            {/* <div className="presentation-circle-1"></div> */}

            <Helmet>
              <title>
                Accessibility testing services | A11ysolutions
              </title>
            </Helmet>

            <div className="a11y-page-top">
                <Presentation
                    title="Our expert team will guarantee your product's accessibility"
                    texts={[
                        "We combine technology and",
                        "expertise to help you meet your",
                        "compliance goals and make the web",
                        "accessible to everyone."
                    ]}
                    buttonText="Get a free consultation"
                    className="accessibility-presentation-sign-custom-text"
                />
            </div>
            <Illustration
                pillText="Accessibility"
                imgSrc={window.innerWidth >= 768 ? "/explain-hand-with-laptop@2x.png" : "/explain-hand-with-laptop.png"}
                containerStyle={{ position: "relative", marginTop: "50px" }}
                pillPositionClass="pill-position"
            />

            <section className="accesibility-a11y-qualities">
                <div className="accesibility-a11y-why-choose-us-qualities">
                    <BicolorTitledText
                        color1="black"
                        color2="#0D9E71"
                        color1Text="We offer the following"
                        color2Text="accessibility audits for you:"
                        className="bicolor-titled-container 11y-first-bicolored"
                    >
                        Our test automation engineers will put your testing on the automation footing
                        to find more defects in less time. We do this in order to:
                    </BicolorTitledText>

                    <div className="a11y-qualities-top-section" role="list">
                        <AchievementCard imgSrc="/video-play.svg">
                            <h3>Video captioning and audio descriptions</h3>
                            <p>By adding closed captions to your videos, and, describing visual information needed to understand the content, we'll allow more viewers to enjoy your media.</p>
                        </AchievementCard>

                        <AchievementCard imgSrc="/utensils.svg">
                            <h3>Design</h3>
                            <p>We'll review if your design meets accessibility from the very beginning, reviewing your mockups/wireframes against WCAG standard, helping you to ensure that everyone has equal access.</p>
                        </AchievementCard>
                    </div>
                </div>

                <div className="a11y-qualities-section" role="list">
                    <AchievementCard imgSrc="/desktop-pc.svg">
                        <h3>Websites</h3>
                        <p>We will help you to make your website usable by as many people as possible, whatever their hardware, software, language, location, or ability.</p>
                    </AchievementCard>

                    <AchievementCard imgSrc="/group-icons.svg">
                        <h3>Mobile Applications</h3>
                        <p>We will help you build natively and think about accessibility early and often, making your applications to be more accessible to people with disabilities when they are using mobile phones and other devices.</p>
                    </AchievementCard>
                </div>

                <div className="a11y-qualities-section" role="list">
                    <AchievementCard imgSrc="/folder-data.svg">
                        <h3>Pdfs, word documents, presentations or spreadsheets</h3>
                        <p>All type of users will benefits from this because your documents will be created to be as easily readable by a sighted reader as a low vision or non-sighted reader.</p>
                    </AchievementCard>
                </div>

            </section>


            <section className="a11y-page second-info">

                <BicolorTitledText
                    color1="black"
                    color2="#0D9E71"
                    color1Text="Does your product need a VPAT"
                    color2Text="(Voluntary Product Accessibility Template)?"
                >
                    Creating your VPAT Document will help the world and potential customers know how accessible your products and services are to everyone.
                </BicolorTitledText>

                <div className="a11y-buttons">
                    <Button className="card-button" size="large">
                        <a className="removed-decorator-link" href="./VPAT_Template.pdf">View a Sample VPAT</a>
                    </Button>
                    <Button onClick={scrollToContactForm}
                        className="automation"
                    >Get in touch</Button>
                </div>

            </section>

            <section className="a11y-info-with-image inverted">
                <div className="vpat a11y-page second-info">
                    <div className="vpat vpat-explanation-header"><h3>WHAT IS A <b>VPAT</b>?</h3></div>

                    <div className="vpat vpat-explanation-content">
                        A VPAT is a clear documentation on how your digital product conforms to WCAG criteria. It clearly states which accessibility
                        standards your application meets, and it advise users about any “accessibility blockers” they may face while using your product.
                    </div>

                    <Button onClick={scrollToContactForm}
                        className="automation"
                    >Get in touch</Button>
                </div>

                <div className="intermediate-image">
                    <div className="a11y-first-encircled-img">
                        <img src="/hand-with-laptop-circular.png" alt="" className="a11y-first-image" />
                    </div>
                    <div className="automation-first-blurred-circle"></div>
                </div>
            </section>

            <section className="a11y-info-with-image">
                <div className="vpat a11y-page second-info">
                    <div className="vpat vpat-explanation-header">
                        <h3>WHY MY PRODUCT OR ORGANIZATION <b>NEEDS A VPAT</b>?</h3>
                    </div>

                    <div className="vpat vpat-explanation-content">
                        Because doing so your organization is telling the world how accessible your product, service, application or website is,
                        which inevitably leads to a better version of itself because websites that are easier to navigate via screen reader are also
                        easier for search engines to understand, increasing web traffic and better SEO.
                    </div>

                    <Button onClick={scrollToContactForm}
                        className="automation"
                    >Get in touch</Button>
                </div>

                <div className="intermediate-image a11y-img-combo">
                    <img src="/laptop-in-desktop-with-plants.png" alt="" className="automation-second-image" />
                    <div className="automation-second-image-container">
                        <img src="/procreator-ux-design-studio.png" alt="" className="automation-third-image" />
                        <img src="/explain-hand-with-laptop-circular.png" alt="" className="automation-fourth-image" />
                    </div>
                    <div className="automation-second-circle-container">
                        <div className="automation-second-circle" ></div>
                        <div className="automation-second-blurred-circle"></div>
                    </div>
                </div>

            </section>

            <section className="a11y-info-with-image inverted">
                <div className="checked-info">
                    <BicolorTitledText
                        color1="black"
                        color2="#0D9E71"
                        color1Text="We provide a detailed defects"
                        color2Text="analysis report"
                    >
                        An accessibility conformance evaluation requires a combination of automated tools and manual evaluation.
                        Our experienced team of developers and Accessibility testers will conduct a meticulous-full assessment of
                        your content and help your team to walk through a detailed defects analysis report to determine what you should do next.
                    </BicolorTitledText>

                    <div className="vpat-explanation-header no-margin"><h3>THIS REPORT WILL INCLUDE:</h3></div>

                    <div className="checked-items" role="list">
                        <div className="checked-group-1">
                            <CheckedItem>Feature/Module/URL evaluated</CheckedItem>
                            <CheckedItem>Screenshots/Video</CheckedItem>
                            <CheckedItem>Compliance item violated</CheckedItem>
                            <CheckedItem>Issue description</CheckedItem>
                            <CheckedItem>Suggested solution</CheckedItem>
                        </div>

                        <div className="checked-group-1">
                            <CheckedItem>WCAG 2.0/2.1 | Section 508</CheckedItem>
                            <CheckedItem>Success Criteria Conformance Level (Level A|AA|AAA)</CheckedItem>
                            <CheckedItem>Browsers & Screen Readers used</CheckedItem>
                            <CheckedItem>Among others</CheckedItem>
                        </div>
                    </div>

                    <Button onClick={scrollToContactForm}
                        className="automation"
                    >Get in touch</Button>

                </div>

                <div className="intermediate-image a11y-img-combo">
                    <div className="a11y-first-encircled-img">
                        <img src="/writing-in-paper.png" alt="" className="a11y-first-image" />
                    </div>
                    <div className="a11y-first-blurred-circle"></div>
                </div>
            </section>

            <section className="a11y-info-with-image a11y-shadowed-section">
                <div className="checked-info">
                    <div>
                        <BicolorTitledText
                            color1="black"
                            color2="#0D9E71"
                            color1Text="Our expert team"
                            color2Text="will help you also with"
                        ></BicolorTitledText>

                        <div className="vpat-explanation-header no-margin"><h3>VERIFICATION TESTING</h3></div>

                        <div className="vpat-explanation-content no-margin">
                            Once your team has fixed all the issues found in our initial audit accessibility assessment we will do the Verification Testing phase
                            to confirm that your product finally met all the required accessibility guidelines.
                            <br /><br />
                            Also, we will check that any change or addition that you did hasn’t introduce any other accessibility issues. This way we ensure
                            your product is understood, navigated, used and accessible by everyone, regardless of the technology or platform used to access it.
                        </div>
                        <Button onClick={scrollToContactForm}
                            className="automation"
                        >Get in touch</Button>
                    </div>

                    <div className="last-image">
                        <div className="automation-third-circle-container">
                            <div className="automation-third-blurred-circle"></div>
                            <div className="a11y-fourth-circle" ></div>
                        </div>
                        <img src="/approved-agreement-allowed-validation-concept.png" alt="" className="automation-fith-image" />
                    </div>
                </div>


                <div className="checked-info second">

                    <div className="second-text-info">
                        <div className="vpat-explanation-header no-margin"><h3>ACCESSIBILITY MONITOR</h3></div>

                        <div className="vpat-explanation-content no-margin">
                            How do you ensure, every time you make any change in your code or add a new feature, your product remains accessible?
                            <br /><br />
                            With Accessibility Monitoring we will test and verify periodically that your website or web application still met the
                            Accessibility Standards and Guidelines required to keep your product accessible to every one.
                        </div>
                        <Button onClick={scrollToContactForm}
                            className="automation"
                        >Get in touch</Button>
                    </div>

                    <div className="last-image">
                        <div className="automation-third-circle-container">
                            <div className="automation-third-blurred-circle"></div>
                            <div className="a11y-fourth-circle" ></div>
                        </div>
                        <img src="/result-economy-success-report-solution-statistics.png" alt="" className="automation-fith-image" />
                    </div>
                </div>



                <div className="checked-info">

                    <div>
                        <div className="vpat-explanation-header no-margin"><h3>UX/UI AUDITS</h3></div>

                        <div className="vpat-explanation-content no-margin">
                            <b>We help your UX/UI Team</b> when building new Products, Features, and Applications from the very beginning to ensure your design
                            wireframes/mockups are in compliance with accessibility.
                            <br /><br />
                            Our experts will provide detailed annotations to point out any potential accessibility issues and will help you define the best
                            components so your Product will be WCAG compliant since Day 0.
                        </div>
                        <Button onClick={scrollToContactForm}
                            className="automation"
                        >Get in touch</Button>

                    </div>
                    <div className="last-image">
                        <div className="automation-third-circle-container">
                            <div className="automation-third-blurred-circle"></div>
                            <div className="a11y-fourth-circle" ></div>
                        </div>
                        <img src="/cooperation-analyst-chart-professional-paper-economics.png" alt="" className="automation-fith-image" />
                    </div>
                </div>

            </section>

            <Toolset />
        </div>
    )
}

export default Accessibility
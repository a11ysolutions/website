import React, { useState, useRef, Fragment } from 'react'
import './Layout.css'
import Navbar from '../UI/Navbar/Navbar'
import SideDrawer from '../UI/SideDrawer/SideDrawer'
import Footer from '../UI/Footer/Footer'
import { useLocation } from 'react-router'

function Layout({ children }) {
  const { pathname } = useLocation()
  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const h2Ref = useRef(null)
  const menuButtonRef = useRef(null);
  
  const focusH2 = () => {
    h2Ref.current.scrollIntoView()
    h2Ref.current.focus()
  }

  const hasAlliBotContainer = pathname === '/alliBot'
  const hasAlliWidgetContainer = pathname === '/alliWidget'
  const hasFeedbackHubContainer = pathname === '/alliBot-feedback'
  const layoutAlliBotClasses = `${hasAlliBotContainer ? 'layout-alliBot' : ''}`
  const layoutAlliWidgetClasses = `${hasAlliWidgetContainer ? 'layout-alliWidget' : ''}`
  const layoutFeedbackHubClasses = `${hasFeedbackHubContainer ? 'layout-feedback-hub' : ''}`

  return (
    <Fragment>
      <div className={`layout-content ${layoutAlliBotClasses} ${layoutAlliWidgetClasses} ${layoutFeedbackHubClasses}`}>
        <div className="circles-container">
          <div className="right-circle"></div>
          <div className="left-circle"></div>
          <div className="bottom-circle"></div>
        </div>

        <Navbar
          onClickMenu={() => { setShowSideDrawer(true)}}
          onClickContactUs={() => { focusH2() }}
          menuButtonRef={menuButtonRef}
        />
        <SideDrawer
          show={showSideDrawer}
          onClose={() => {
            setShowSideDrawer(false)
            menuButtonRef.current.focus()
          }}
          onClickContactUs={() => {
            focusH2()
            setShowSideDrawer(false)
          }}
        />
        {children}
      </div>
      <Footer reference={h2Ref} />
    </Fragment>
  )
}

export default Layout

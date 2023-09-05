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

  const focusH2 = () => {
    h2Ref.current.scrollIntoView()
    h2Ref.current.focus()
  }

  const hasa11yBotContainer = pathname === '/alliBot'
  const hasa11yWidgetContainer = pathname === '/alliWidget'
  const layoutA11yBotClasses = `${hasa11yBotContainer ? 'layout-a11yBot' : ''}`
  const layoutA11yWidgetClasses = `${hasa11yWidgetContainer ? 'layout-a11yWidget' : ''}`

  return (
    <Fragment>
      <div className={`layout-content ${layoutA11yBotClasses} ${layoutA11yWidgetClasses}`}>
        <div className="circles-container">
          <div className="right-circle"></div>
          <div className="left-circle"></div>
          <div className="bottom-circle"></div>
        </div>

        <Navbar
          onClickMenu={() => {
            setShowSideDrawer(true)
          }}
          onClickContactUs={() => {
            focusH2()
          }}
        />
        <SideDrawer
          show={showSideDrawer}
          onClose={() => setShowSideDrawer(false)}
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

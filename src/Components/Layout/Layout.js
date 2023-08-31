import React, { useState, useRef, Fragment } from 'react'
import './Layout.css'
import Navbar from '../UI/Navbar/Navbar'
import SideDrawer from '../UI/SideDrawer/SideDrawer'
import Footer from '../UI/Footer/Footer'
import { useLocation } from 'react-router'

function Layout({ children }) {
  const { pathname } = useLocation()
  console.log("🚀  pathname:", pathname)
  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const h2Ref = useRef(null)

  const focusH2 = () => {
    h2Ref.current.scrollIntoView()
    h2Ref.current.focus()
  }

  const hasa11yBotContainer = pathname === '/a11yBot'
  const layoutContentClasses = `layout-content ${hasa11yBotContainer ? 'layout-helper' : ''}`

  return (
    <Fragment>
      <div className={layoutContentClasses}>
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

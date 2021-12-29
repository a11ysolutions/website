import React, { useState, Fragment } from "react"
import "./Layout.css"
import Navbar from "../UI/Navbar/Navbar"
import SideDrawer from "../UI/SideDrawer/SideDrawer"
import Footer from "../UI/Footer/Footer"


function Layout({ children }) {
    const [showSideDrawer, setShowSideDrawer] = useState(false)

    return (
        <Fragment>
            <div className="layout-content">
                <div className="circles-container">
                    <div className="right-circle"></div>
                    <div className="bottom-circle"></div>
                </div>

                <Navbar
                    onClickMenu={() => { setShowSideDrawer(true); }}
                />
                <SideDrawer
                    show={showSideDrawer}
                    onClose={() => setShowSideDrawer(false)}
                />
                {children}
            </div>
            <Footer />
        </Fragment>

    )
}

export default Layout
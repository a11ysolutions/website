import React, { useState } from "react"
import "./Layout.css"
import Navbar from "../UI/Navbar/Navbar"
import SideDrawer from "../UI/SideDrawer/SideDrawer"


function Layout({ children }) {
    const [showSideDrawer, setShowSideDrawer] = useState(false)

    return (
        <div className="layout-content">
            <Navbar
                onClickMenu={() => { setShowSideDrawer(true); }}
            />
            <SideDrawer
                show={showSideDrawer}
                onClose={() => setShowSideDrawer(false)}
            />
            {children}
        </div>
    )
}

export default Layout
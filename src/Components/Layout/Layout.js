import React from "react"
import "./Layout.css"
function Layout({ children }) {
    return (
        <div className="layout-content">
            {children}
        </div>
    )
}

export default Layout
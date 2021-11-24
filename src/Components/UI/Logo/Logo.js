import React from "react"

function Logo({ style, color }) {
    if (color === "green")
        return (<img src="/logo-green.png" alt="logo" style={{ ...style }} />)

    return <img src="/logo.png" alt="logo" style={{ ...style }} />
}

export default Logo
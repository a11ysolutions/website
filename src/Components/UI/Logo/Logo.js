import React from "react"

function Logo({ style, color, className }) {
    if (color === "green")
        return (<img src="/logo-green.png" alt="logo" style={{ ...style }} className={className} />)

    return <img src="/logo.png" alt="logo" style={{ ...style }} className={className} />
}

export default Logo
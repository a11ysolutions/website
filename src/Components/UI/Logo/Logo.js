import React from "react"

function Logo({ style, color, className }) {
    if (color === "green")
        return (<img src="/logo-green.png" alt="A11ySolutions logo" style={{ ...style }} className={className} />)

    return <img src="/logo.png" alt="A11ySolutions home" style={{ ...style }} className={className} />
}

export default Logo
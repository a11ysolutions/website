import React from "react"

function Logo({ style, color, className, altText }) {
    if (color === "green")
        return (<img src="/logo-green.png" alt="A11ySolutions logo" style={{ ...style }} className={className} />)

    return <img src="/logo.png" alt={altText} style={{ ...style }} className={className} />
}

export default Logo
import React from "react"

function Logo({ style }) {
    return (
        <img src="/logo.png" alt="logo" style={{ ...style }} />
    )
}

export default Logo
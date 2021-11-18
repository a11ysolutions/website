import React from "react"
import { IoMenu } from "react-icons/io5"
import "./ToggleMenu.css"

function ToggleMenu({ onClick }) {
    return (
        <button className="toggle-menu-btn" onClick={onClick}>
            <IoMenu color="black" size="24" />
        </button>
    )
}

export default ToggleMenu
import React, { useEffect } from "react"
import { IoMenu } from "react-icons/io5"
import "./ToggleMenu.css"

function ToggleMenu({ onClick }) {

    const [isHidden, setIsHidden] = React.useState(false)

    useEffect(() => {
        const btn = document.querySelector(".toggle-menu-btn")
        const style = getComputedStyle(btn)

        setIsHidden(style.display === "none")
    }, [])
    return (
        isHidden || <button className="toggle-menu-btn" onClick={onClick}>
                        <IoMenu color="black" size="24" />
                    </button>
    )
}

export default ToggleMenu
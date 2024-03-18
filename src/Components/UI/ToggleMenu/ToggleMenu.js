import React, { useEffect } from 'react'
import { IoMenu } from 'react-icons/io5'
import './ToggleMenu.css'

function ToggleMenu({ onClick,menuButtonRef }) {
  //   const [isHidden, setIsHidden] = React.useState(false)

  //   useEffect(() => {
  //     const btn = document.querySelector('.toggle-menu-btn')
  //     const style = getComputedStyle(btn)

  //     setIsHidden(style.display === 'none')
  //   }, [])
  return (
    // isHidden || (
    <button className="toggle-menu-btn" aria-label="Open Menu" onClick={onClick} ref={menuButtonRef}>
      <IoMenu color="black" size="24" aria-hidden="true" />
    </button>
  )
}

export default ToggleMenu

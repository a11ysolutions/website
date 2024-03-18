import React, { useEffect, useState,useRef } from 'react'
import './SideDrawer.css'
import { IoCloseSharp } from 'react-icons/io5'
import Logo from '../Logo/Logo'
import '../ToggleMenu/ToggleMenu.css'
import Button from '../Button/Button'

function SideDrawer({ show, onClose, onClickContactUs  }) {
  const [attachedClasses, setAttachedClasses] = useState('close')
  const sidebarRef = useRef(null)
  const firstFocusableElementRef = useRef(null) 
  const lastFocusableElementRef = useRef(null)

  const handleTabKey = (e) => {
    if (e.key === 'Tab') {
   
      if (e.shiftKey && document.activeElement === firstFocusableElementRef.current) {
        lastFocusableElementRef.current.focus()
        e.preventDefault()
      
      } else if (!e.shiftKey && document.activeElement === lastFocusableElementRef.current) {
        firstFocusableElementRef.current.focus()
        e.preventDefault()
      }
    }

    if (e.keyCode === 27) {
      onClose()
    }
  }

  useEffect(() => {
    if (show) {
      setAttachedClasses('open')
    //   const closeButton = document.querySelector('.toggle-menu-btn-close')
    //   closeButton && closeButton.focus()

      const focusableElements = sidebarRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );

      firstFocusableElementRef.current = focusableElements[0];
      lastFocusableElementRef.current = focusableElements[focusableElements.length - 1];
    //   setTimeout(() => {
        firstFocusableElementRef.current.focus();
    //   }, 100);

      document.addEventListener('keydown', handleTabKey)

      return () => {
        document.removeEventListener('keydown', handleTabKey)
      }
    }
  }, [show]) 


  return (
    show && (
      <div role="dialog" aria-modal="true" className={`side-drawer ${attachedClasses}`} aria-hidden={!show} ref={sidebarRef} aria-labelledby='sidebar'>
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '21px', flexDirection: 'row-reverse' }}>
          <button className="toggle-menu-btn toggle-menu-btn-close" aria-label="Close Menu" onClick={onClose}>
            <IoCloseSharp color="black" size="25" aria-hidden="true"/>
          </button>
          <Logo
            style={{ marginLeft: '15px', height: '28px', }}
            altText="A11ySolutions"
          />
        </div>
        <span id="sidebar" className="sr-only" aria-hidden="true">
          Menu
        </span>
        <ul className="side-drawer-links">
            <li><a onClick={onClose} href="/#why-choose-us">Why choose us</a></li>
            <li><a onClick={onClose} href="/#our-services">Our services</a></li>
            <li><a onClick={onClose} href="/#our-products">Our products</a></li>
            <li><a onClick={onClose} href="/#clients">Clients</a></li>
            <li><a onClick={onClose} href="/#why-choose-us">Services Politics</a></li>
            <li><a onClick={onClose} href="/#why-choose-us">Terms and Conditions</a></li>
        </ul>
        <div className="side-drawer-button">
          <Button            
            //onClick={() => { window.location.href = "#contact-us"; onClose() }}
            onClick={onClickContactUs}
          >
            Contact us
          </Button>
        </div>
      </div>
    )
  )
}

export default SideDrawer

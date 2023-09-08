import React from 'react'
import Button from '../Button/Button'
import './TryItNow.css'

function TryItNow({ handleNavigate, buttonText }) {
  return (
    <div className="tryItNow">
      <div className="tryItNow-content">
        <h2 className="tryItNow-text">Give it a try for free</h2>
        <Button size="large" onClick={handleNavigate}>
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

export default TryItNow

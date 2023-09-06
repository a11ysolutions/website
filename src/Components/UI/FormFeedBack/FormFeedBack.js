import React, { useState, useRef } from 'react'
import './FormFeedBack.css'
import Button from '../Button/Button'

function FormFeedBack() {
  const initialValues = { emailFeedBack: '', messageFeedBack: '' }
  const COMPANY_EMAIL = 'felipe.perez@a11ysolutions.com'
  const [formValues, setFormValues] = useState(initialValues)
  const emailRef = useRef(null)
  const SUBJECT = `Interested from `

  const changeHandler = (event) => {
    const { id, value } = event.target
    setFormValues({ ...formValues, [id]: value })
  }

  const onSubmit = (event) => {
    event.preventDefault()
      const BODY = `${formValues.messageFeedBack}
---------------------------

            `
      const URL_SUBJECT = encodeURIComponent(SUBJECT)
      const URL_BODY = encodeURIComponent(BODY)

      window.location.href = `mailto:${COMPANY_EMAIL}?subject=${URL_SUBJECT}&body=${URL_BODY}`

      // Reset values
      setFormValues(initialValues)
  }

  return (
    <div>
      <form onSubmit={(event) => onSubmit(event)} noValidate className="form-inputs-container">
        <div className="form-fb-inputs">
          <div className="form-left-section">
            <div className="form-fb-group">
              <label htmlFor="emailFeedBack" style={{ display: 'block', textAlign: 'left' }}>
                Email
              </label>
              <input
                id="emailFeedBack"
                className='form-fb-input'
                ref={emailRef}
                type="email"
                autoComplete="email"
                value={formValues.emailFeedBack}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div style={{ paddingTop: '12px' }}>
            <div className="form-fb-group">
              <label htmlFor="messageFeedBack" style={{ display: 'block', textAlign: 'left' }}>
                Message
              </label>
              <textarea
                id="messageFeedBack"
                className="form-fb-input"
                type="text"
                value={formValues.messageFeedBack}
                onChange={changeHandler}
              />
            </div>
          </div>
        </div>
        <div className="form-group form-button">
          <Button
            role="button"
            className="presentation-button x-large"
            variant="dark"
            style={{ height: '3em' }}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}
export default FormFeedBack

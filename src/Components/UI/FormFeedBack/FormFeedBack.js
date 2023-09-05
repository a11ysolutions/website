import React, { useState, useEffect, useRef } from 'react'
import './FormFeedBack.css'
import Button from '../Button/Button'

function FormFeedBack() {
  const initialValues = { email: '', message: '' }

  const COMPANY_EMAIL = 'felipe.perez@a11ysolutions.com'

  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  let isSubmit = false
  //const [isSubmit, setIsSubmit] = useState(false)

  const emailRef = useRef(null)

  const SUBJECT = `Interested from `

  let firstFieldWithError = null
  let attribute = { 'aria-invalid': 'true' }

  const changeHandler = (event) => {
    const { id, value } = event.target
    setFormValues({ ...formValues, [id]: value })
    setFormErrors({ ...formErrors, [id]: '' })
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors, isSubmit])

  const onSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validate(formValues)
    setFormErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      // Submit the form

      const BODY = `${formValues.message}
---------------------------

            `

      const URL_SUBJECT = encodeURIComponent(SUBJECT)
      const URL_BODY = encodeURIComponent(BODY)

      window.location.href = `mailto:${COMPANY_EMAIL}?subject=${URL_SUBJECT}&body=${URL_BODY}`

      // Reset values
      setFormValues(initialValues)
    }
  }
  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (!values.email) {
      errors.email = 'Please enter an email address'
      if (!firstFieldWithError) firstFieldWithError = emailRef
    } else if (!regex.test(values.email)) {
      errors.email = 'Please enter a valid email'
      if (!firstFieldWithError) firstFieldWithError = emailRef
    }
    if (firstFieldWithError) firstFieldWithError.current.focus()

    return errors
  }

  return (
    <div>
      <form onSubmit={(event) => onSubmit(event)} noValidate className="form-inputs-container">
        <div className="form-fb-inputs">
          <div className="form-left-section">
            <div className="form-fb-group">
              <label htmlFor="email" style={{ display: 'block', textAlign: 'left' }}>
                Email
              </label>
              <input
                id="email"
                className={formErrors['email'] ? 'form-fb-input error' : 'form-fb-input'}
                ref={emailRef}
                type="email"
                autoComplete="email"
                value={formValues.email}
                onChange={changeHandler}
                aria-describedby="email-error"
                {...(formErrors['email'] && attribute)}
              />
              <div id="email-error" className="error-message">
                {formErrors.email}
              </div>
            </div>
          </div>
          <div style={{ paddingTop: '12px' }}>
            <div className="form-fb-group">
              <label htmlFor="message" style={{ display: 'block', textAlign: 'left' }}>
                Message
              </label>
              <textarea
                id="message"
                className="form-fb-input"
                type="text"
                value={formValues.message}
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

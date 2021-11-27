import React, { useState, useEffect, useRef } from "react"
import "./Form.css"
import Button from "../Button/Button"

function Form() {

    const initialValues = { name: "", companyName: "", email: "", phoneNumber: "", message: "" }

    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const nameRef = useRef(null)
    const companyNameRef = useRef(null)
    const emailRef = useRef(null)
    const phoneNumberRef = useRef(null)


    /*
        const [name, setName] = useState("")
        const [companyName, setCompanyName] = useState("")
        const [email, setEmail] = useState("")
        const [phoneNumber, setPhoneNumber] = useState("")
        const [message, setMessage] = useState("")
        const [errors, setErrors] = useState({ name: "", companyName: "", email: "", phoneNumber: "" })
        const [errorMsgs, setErrorMsgs] = useState({ name: "", companyName: "", email: "", phoneNumber: "" })*/

    const changeHandler = (event) => {
        //console.log(event.target)
        const { id, value } = event.target
        console.log(id, " - ", value)
        setFormValues({ ...formValues, [id]: value })

        console.log(formValues)

    }

    useEffect(() => {
        console.log(formErrors)

        if (Object.keys(formErrors).length === 0 && isSubmit) { }
        //console.log(formValues)

    }, [formErrors])

    const onSubmit = (event) => {
        event.preventDefault()
        setFormErrors(validate(formValues))
        setIsSubmit(true)
        //console.log(formErrors)
    }
    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

        if (!values.name) {
            errors.name = "Please enter a name"
        }
        if (!values.companyName) {
            errors.companyName = "Please enter the name of your company"
        }
        if (!values.email) {
            errors.email = "Please enter an email address"
        } else if (!regex.test(values.email)) {
            errors.email = "Please enter a valid email"
        }
        if (!values.phoneNumber) {
            errors.phoneNumber = "Please enter your phone number"
        }
        console.log(formValues)
        return errors
    }

    return (
        <div style={{ marginTop: "4em" }}>
            <form onSubmit={(event) => onSubmit(event)} noValidate>
                <h2 style={{ textTransform: "uppercase", fontSize: "1em" }}>Request a consultation from one of our experts</h2>
                <div className="form-group">
                    <label htmlFor="name" style={{ marginTop: "0em" }}>Name <span className="required">(required)</span></label>
                    <input
                        id="name"
                        className="form-input"
                        ref={nameRef}
                        type="text"
                        autoComplete="name"
                        value={formValues.name}
                        onChange={changeHandler}
                        aria-describedby="name-error" />
                    <div id="name-error" className="error-message">{formErrors.name}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="companyName" >Company name<span className="required"> (required)</span></label>
                    <input
                        id="companyName"
                        className="form-input"
                        ref={companyNameRef}
                        type="text"
                        value={formValues.companyName}
                        onChange={changeHandler}
                        aria-describedby="company-name-error" />
                    <div id="company-name-error" className="error-message">{formErrors.companyName}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="email" >Email<span className="required"> (required)</span></label>
                    <input
                        id="email"
                        className="form-input"
                        ref={emailRef}
                        type="email"
                        autoComplete="email"
                        value={formValues.email}
                        onChange={changeHandler}
                        aria-describedby="email-error" />
                    <div id="email-error" className="error-message">{formErrors.email}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber" >Phone number<span className="required"> (required)</span></label>
                    <input
                        id="phoneNumber"
                        className="form-input"
                        ref={phoneNumberRef}
                        type="text"
                        autoComplete="phone"
                        value={formValues.phoneNumber}
                        onChange={changeHandler}
                        aria-describedby="phone-number-error" />
                    <div id="phone-number-error" className="error-message">{formErrors.phoneNumber}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="message" >Message</label>
                    <textarea
                        id="message"
                        className="form-input"
                        type="text"
                        value={formValues.message}
                        onChange={changeHandler}>
                    </textarea>

                </div>
                <div className="form-group" style={{ textAlign: "center" }}>
                    <Button variant="light" style={{ height: "3em" }}>Submit now</Button>
                </div>

            </form>

        </div>
    )
}
export default Form
import React, { useState, useEffect, useRef } from "react"
import "./Form.css"
import Button from "../Button/Button"

function Form() {

    const initialValues = { name: "", companyName: "", email: "", phoneNumber: "", message: "" }

    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    let isSubmit = false
    //const [isSubmit, setIsSubmit] = useState(false)

    const nameRef = useRef(null)
    const companyNameRef = useRef(null)
    const emailRef = useRef(null)
    const phoneNumberRef = useRef(null)

    let firstFieldWithError = null
    let attribute= {"aria-invalid":"true"}
    

    const changeHandler = (event) => {

        const { id, value } = event.target
        setFormValues({ ...formValues, [id]: value })
        setFormErrors({...formErrors,[id]:""})
    }

    useEffect(() => {

        if (Object.keys(formErrors).length === 0 && isSubmit) { }

    }, [formErrors,isSubmit])

    const onSubmit = (event) => {
        event.preventDefault()
        const validationErrors = validate(formValues)
        setFormErrors(validationErrors)

        if(Object.keys(validationErrors).length === 0){

            // Submit the form
            console.log("Submiting form ....")
            // Reset values
            setFormValues(initialValues)
        }      
        
    }
    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        const regexPhone = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[-. \\/]?)?((?:\(?\d{1,}\)?[-. \\/]?){0,})(?:[-. \\/]?(?:#|ext\.?|extension|x)[-. \\/]?(\d+))?$/i

        if (!values.name) {
            errors.name = "Please enter a name"
           if(!firstFieldWithError) firstFieldWithError = nameRef
        }
        if (!values.companyName) {
            errors.companyName = "Please enter the name of your company"
            if(!firstFieldWithError) firstFieldWithError = companyNameRef
        }
        if (!values.email) {
            errors.email = "Please enter an email address"
            if(!firstFieldWithError) firstFieldWithError = emailRef
            
        } else if (!regex.test(values.email)) {
            errors.email = "Please enter a valid email"
            if(!firstFieldWithError) firstFieldWithError = emailRef         
        }
        if (!values.phoneNumber) {
            errors.phoneNumber = "Please enter your phone number"
            if(!firstFieldWithError) firstFieldWithError = phoneNumberRef           
        
        } else if (!regexPhone.test(values.phoneNumber)) {
            errors.phoneNumber = "Please enter a valid phone number"
            if(!firstFieldWithError) firstFieldWithError = phoneNumberRef  
        }else if (values.phoneNumber.length < 9 ) {
            errors.phoneNumber = "Please enter a phone number with more than 8 digits"
            if(!firstFieldWithError) firstFieldWithError = phoneNumberRef  
        }
        else if (values.phoneNumber.length >15 ) {
            errors.phoneNumber = "Please enter a phone number with less than 15 digits"
            if(!firstFieldWithError) firstFieldWithError = phoneNumberRef  
        }
        if(firstFieldWithError) firstFieldWithError.current.focus()
    
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
                        className={formErrors["name"] ? "form-input error" : "form-input"}
                        ref={nameRef}
                        type="text"
                        autoComplete="name"
                        value={formValues.name}
                        onChange={changeHandler}
                        aria-describedby="name-error" 
                        { ...(formErrors["name"]&& attribute)}
                        />
                    <div id="name-error" className="error-message">{formErrors.name}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="companyName" >Company name<span className="required"> (required)</span></label>
                    <input
                        id="companyName"
                        className={formErrors["companyName"] ? "form-input error" : "form-input"}
                        ref={companyNameRef}
                        type="text"
                        value={formValues.companyName}
                        onChange={changeHandler}
                        aria-describedby="company-name-error" 
                        { ...(formErrors["companyName"]&& attribute)}
                        />
                    <div id="company-name-error" className="error-message">{formErrors.companyName}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="email" >Email<span className="required"> (required)</span></label>
                    <input
                        id="email"
                        className={formErrors["email"] ? "form-input error" : "form-input"}
                        ref={emailRef}
                        type="email"
                        autoComplete="email"
                        value={formValues.email}
                        onChange={changeHandler}
                        aria-describedby="email-error" 
                        { ...(formErrors["email"]&& attribute)}
                        />
                    <div id="email-error" className="error-message">{formErrors.email}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber" >Phone number<span className="required"> (required)</span></label>
                    <input
                        id="phoneNumber"
                        className={formErrors["phoneNumber"] ? "form-input error" : "form-input"}
                        
                        ref={phoneNumberRef}
                        type="text"
                        autoComplete="tel"
                        value={formValues.phoneNumber}
                        onChange={changeHandler}
                        aria-describedby="phone-number-error" 
                        { ...(formErrors["phoneNumber"]&& attribute)}
                        />
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
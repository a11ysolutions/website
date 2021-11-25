import React, { useState } from "react"
import "./Form.css"
import Button from "../Button/Button"

function Form() {

    const [name, setName] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")
    const [errors, setErrors] = useState({ name: "", companyName: "", email: "", phoneNumber: "" })
    const [errorMsgs, setErrorMsgs] = useState({ name: "", companyName: "", email: "", phoneNumber: "" })

    const onSubmit = (event) => {
        event.preventDefault()
        console.log("formValidation: ", formValidation())
        if (formValidation()) {
            console.log("No errors - Submiting...")
        }
        else {
            console.log("Empty fields")
        }

    }
    const formValidation = () => {

        let isValid = false

        // Empty fields
        if (name.length > 0 && companyName.length > 0 && email.length > 0 && phoneNumber.length > 0) {
            console.log(name.length)
            isValid = true
        }

        // Email

        return isValid
    }

    return (
        <div style={{ marginTop: "4em" }}>
            <form onSubmit={onSubmit}>
                <h2 style={{ textTransform: "uppercase", fontSize: "1em" }}>Request a consultation from one of our experts</h2>
                <div className="form-group">
                    <label htmlFor="name" style={{ marginTop: "0em" }}>Name <span className="required">(required)</span></label>
                    <input id="name" className="form-input error" type="text" autoComplete="name" value={name} onChange={(event) => { setName(event.target.value) }} />
                    <div id="name-error" className="error-message">Please enter a name</div>
                </div>
                <div className="form-group">
                    <label htmlFor="company-name" >Company name<span className="required"> (required)</span></label>
                    <input id="company-name" className="form-input" type="text" value={companyName} onChange={(event) => { setCompanyName(event.target.value) }} />
                </div>
                <div className="form-group">
                    <label htmlFor="email" >Email<span className="required"> (required)</span></label>
                    <input id="email" className="form-input" type="email" autoComplete="email" value={email} onChange={(event) => { setEmail(event.target.value) }} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone-number" >Phone number<span className="required"> (required)</span></label>
                    <input id="phone-number" className="form-input" type="text" autoComplete="phone" value={phoneNumber} onChange={(event) => { setPhoneNumber(event.target.value) }} />
                </div>
                <div className="form-group">
                    <label htmlFor="message" >Message</label>
                    <textarea id="message" className="form-input" type="text" value={message} onChange={(event) => { setMessage(event.target.value) }} />
                </div>
                <div className="form-group" style={{ textAlign: "center" }}>
                    <Button variant="light" style={{ height: "3em" }}>Submit now</Button>
                </div>

            </form>

        </div>
    )
}
export default Form
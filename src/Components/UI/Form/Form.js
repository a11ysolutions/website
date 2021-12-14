import React from "react"
import "./Form.css"
import Button from "../Button/Button"

function Form() {
    return (
        <div style={{ marginTop: "4em" }}>
            <form>
                <h2 style={{ textTransform: "uppercase", fontSize: "1em" }}>Request a consultation from one of our experts</h2>
                <div className="form-inputs">
                    <div className="form-left-section">
                        <div className="form-group">
                            <label for="name" style={{ display: "block" }}>Name*</label>
                            <input id="name" className="form-input" type="text" autoComplete="name" />
                        </div>
                        <div className="form-group">
                            <label for="company-name" style={{ display: "block" }}>Company name*</label>
                            <input id="company-name" className="form-input" type="text" />
                        </div>
                        <div className="form-group">
                            <label for="email" style={{ display: "block" }}>Email*</label>
                            <input id="email" className="form-input" type="email" autoComplete="email" />
                        </div>
                    </div>
                    <div>
                        <div className="form-group">
                            <label for="phone-number" style={{ display: "block" }}>Phone number*</label>
                            <input id="phone-number" className="form-input" type="text" autoComplete="phone" />
                        </div>
                        <div className="form-group">
                            <label for="message" style={{ display: "block" }}>Message</label>
                            <textarea id="message" className="form-input" type="text" />
                        </div>
                    </div>
                </div>
                <div className="form-group form-button" >
                    <Button variant="light" style={{ height: "3em" }}>Submit now</Button>
                </div>

                {/*
                <div><label>Email (required)<input /></label></div>
                <div><label>Phone number (required)<input /></label></div>
                <div><label>Message<textarea></textarea></label></div> */}


            </form>

        </div>
    )
}
export default Form
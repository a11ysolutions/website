import React from "react"
import "./Form.css"
import Button from "../Button/Button"

function Form() {
    return (
        <div style={{ marginTop: "4em" }}>
            <form>
                <h2 style={{ textTransform: "uppercase", fontSize: "1em" }}>Request a consultation from one of our experts</h2>
                <div className="form-group">
                    <label for="name" style={{ marginTop: "0em" }}>Name <span className="required">(required)</span></label>
                    <input id="name" className="form-input error" type="text" autoComplete="name" />
                    <div id="name-error" className="error-message">Please enter a name</div>
                </div>
                <div className="form-group">
                    <label for="company-name" >Company name<span className="required"> (required)</span></label>
                    <input id="company-name" className="form-input" type="text" />
                </div>
                <div className="form-group">
                    <label for="email" >Email<span className="required"> (required)</span></label>
                    <input id="email" className="form-input" type="email" autoComplete="email" />
                </div>
                <div className="form-group">
                    <label for="phone-number" >Phone number<span className="required"> (required)</span></label>
                    <input id="phone-number" className="form-input" type="text" autoComplete="phone" />
                </div>
                <div className="form-group">
                    <label for="message" >Message</label>
                    <textarea id="message" className="form-input" type="text" />
                </div>
                <div className="form-group" style={{ textAlign: "center" }}>
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
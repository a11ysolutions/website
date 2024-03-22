import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Button/Button";
import { CustomToastify } from "../../UI/Toastify/Toastify";
import { toast } from "react-toastify";
import { Hourglass } from "react-loader-spinner";
import "./Form.css";

const initialValues = {
  name: "",
  companyName: "",
  email: "",
  phoneNumber: "",
  message: "",
};

function Form() {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const form = useRef(null);
  const nameRef = useRef(null);
  const companyNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);

  // const COMPANY_EMAIL = 'a11ycontact@a11ysolutions.com'
  const EMAILJS_SERVICE_ID = "service_efc8xuo";
  const EMAILJS_TEMPLATE_ID = "template_lhoh6yn";
  const YOUR_PUBLIC_KEY = "r7jD1lU2aeIUVWlue";

  let firstFieldWithError = null;
  let attribute = { "aria-invalid": "true" };

  const changeHandler = (event) => {
    const { id, value } = event.target;
    setFormValues({ ...formValues, [id]: value });
    setFormErrors({ ...formErrors, [id]: "" });
  };

  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log('🚀  isSubmit Effect:', isSubmit)
  //   }
  // }, [formErrors, isSubmit])

  const onSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(formValues);
    setFormErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmit(true);
      // Submit the form
      emailjs
        .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, {
          publicKey: YOUR_PUBLIC_KEY,
        })
        .then(
          (response) => {
            // console.log('SUCCESS!')
            setIsSubmit(false);
            toast.success("Submission Successful! We will be in touch soon.", {
              toastId: "customId",
            });
          },
          (error) => {
            // console.log('FAILED...', error.text)
            setIsSubmit(false);
            toast.error("Submission Failed. Please try again.", {});
          }
        );

      // Reset values
      setFormValues(initialValues);
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^.\s][^.\s@]+(\.[^.\s@]+)*@[^.\s@]+\.[^.\s@]+[^.\s]$/i;
    const regexName = /^[A-Za-z]+(\s[A-Za-z]+)*$/i;
    const regexPhone =
      /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[-. \\/]?)?((?:\(?\d{1,}\)?[-. \\/]?){0,})(?:[-. \\/]?(?:#|ext\.?|extension|x)[-. \\/]?(\d+))?$/i;

    if (!values.name) {
      errors.name = "Please enter a name";
      if (!firstFieldWithError) firstFieldWithError = nameRef;
    } else if (!regexName.test(values.name)) {
      errors.name = "Please enter a valid name, (e.g. name)";
      if (!firstFieldWithError) firstFieldWithError = nameRef;
    }
    if (!values.companyName) {
      errors.companyName = "Please enter the name of your company";
      if (!firstFieldWithError) firstFieldWithError = companyNameRef;
    }
    if (!values.email) {
      errors.email = "Please enter an email address";
      if (!firstFieldWithError) firstFieldWithError = emailRef;
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email, (e.g. name@gmail.com)";
      if (!firstFieldWithError) firstFieldWithError = emailRef;
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Please enter your phone number";
      if (!firstFieldWithError) firstFieldWithError = phoneNumberRef;
    } else if (!regexPhone.test(values.phoneNumber)) {
      errors.phoneNumber =
        "Please enter a valid phone number with more than 8 digits";
      if (!firstFieldWithError) firstFieldWithError = phoneNumberRef;
    } else if (values.phoneNumber.length < 9) {
      errors.phoneNumber =
        "Please enter a phone number with more than 8 digits";
      if (!firstFieldWithError) firstFieldWithError = phoneNumberRef;
    } else if (values.phoneNumber.length > 15) {
      errors.phoneNumber =
        "Please enter a phone number with less than 15 digits";
      if (!firstFieldWithError) firstFieldWithError = phoneNumberRef;
    }
    if (firstFieldWithError) firstFieldWithError.current.focus();

    return errors;
  };

  return (
    <div style={{ marginTop: "4em" }}>
      <form
        ref={form}
        onSubmit={onSubmit}
        noValidate
        className="form-inputs-container"
      >
        <h2 style={{ textTransform: "uppercase", fontSize: "1em" }}>
          Request a consultation from one of our experts
        </h2>
        <div className="form-inputs">
          <div className="form-left-section">
            <div className="form-group">
              <label htmlFor="name" style={{ display: "block" }}>
                Name<span className="required">(required)</span>
              </label>
              <input
                id="name"
                className={
                  formErrors["name"] ? "form-input error" : "form-input"
                }
                ref={nameRef}
                type="text"
                autoComplete="name"
                value={formValues.name}
                onChange={changeHandler}
                aria-describedby="name-error"
                name="user_name"
                {...(formErrors["name"] && attribute)}
              />
              <div id="name-error" className="error-message">
                {formErrors.name}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="companyName" style={{ display: "block" }}>
                Company name<span className="required"> (required)</span>
              </label>
              <input
                id="companyName"
                className={
                  formErrors["companyName"] ? "form-input error" : "form-input"
                }
                ref={companyNameRef}
                type="text"
                value={formValues.companyName}
                onChange={changeHandler}
                autoComplete="organization"
                aria-describedby="company-name-error"
                name="company_name"
                {...(formErrors["companyName"] && attribute)}
              />
              <div id="company-name-error" className="error-message">
                {formErrors.companyName}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email" style={{ display: "block" }}>
                Email<span className="required"> (required)</span>
              </label>
              <input
                id="email"
                className={
                  formErrors["email"] ? "form-input error" : "form-input"
                }
                ref={emailRef}
                type="email"
                autoComplete="email"
                value={formValues.email}
                onChange={changeHandler}
                aria-describedby="email-error"
                name="user_email"
                {...(formErrors["email"] && attribute)}
              />
              <div id="email-error" className="error-message">
                {formErrors.email}
              </div>
            </div>
          </div>
          <div>
            <div className="form-group">
              <label htmlFor="phoneNumber" style={{ display: "block" }}>
                Phone number<span className="required"> (required)</span>
              </label>
              <input
                id="phoneNumber"
                className={
                  formErrors["phoneNumber"] ? "form-input error" : "form-input"
                }
                ref={phoneNumberRef}
                type="text"
                autoComplete="tel"
                value={formValues.phoneNumber}
                onChange={changeHandler}
                aria-describedby="phone-number-error"
                name="phone_number"
                {...(formErrors["phoneNumber"] && attribute)}
              />
              <div id="phone-number-error" className="error-message">
                {formErrors.phoneNumber}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message" style={{ display: "block" }}>
                Message
              </label>
              <textarea
                id="message"
                className="form-input"
                type="text"
                value={formValues.message}
                onChange={changeHandler}
                name="message"
              />
            </div>
          </div>
        </div>
        <div className="form-group form-button">
          <Button
            role="button"
            className="footer-link button-dark-background"
            variant="light"
            style={{ marginTop: "1em", height: "3em" }}
            ariaLabel={isSubmit ? "loading" : "Submit now"}
          >
            {isSubmit ? (
              <Hourglass
                visible={true}
                height="25"
                width="25"
                ariaLabel="loading"
                colors={["#000000", "#434343"]}
              />
            ) : (
              "Submit now"
            )}
          </Button>
        </div>
      </form>
      <CustomToastify />
    </div>
  );
}
export default Form;

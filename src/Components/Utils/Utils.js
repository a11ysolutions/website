
export const scrollToContactForm = () => {
    
    const nameField = document.getElementById("name")

    window.location.hash = "contact-us"
    nameField.focus()
}

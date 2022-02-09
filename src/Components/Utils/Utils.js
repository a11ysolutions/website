
export const scrollToContactForm = () => {
    
    const nameField = document.getElementById("name")

    nameField.focus()
    window.location.hash = "contact-us"
}

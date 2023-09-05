export const scrollToContactForm = () => {
  const nameField = document.getElementById('name')

  window.location.hash = 'contact-us'
  nameField.focus()
}

export const scrollToWidget = () => {
  window.location.href = '/?openWidget=true'
}

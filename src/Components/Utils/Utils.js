export const scrollToContactForm = () => {
  const nameField = document.getElementById('name')

  window.location.hash = 'contact-us'
  nameField.focus()
}

export const navigateToHome = () => {
  window.location.href = '/?openWidget=true'
}

export const handleOpenWidget = (openWidget) => {
  window.addEventListener('load', () => {
    if (openWidget) {
      const targetElement = document.getElementById('why-choose-us')
      const clientWidth = window.innerWidth
      let targetPosition = targetElement.offsetTop

      if (clientWidth >= 768 && clientWidth < 1200) {
        targetPosition += 40
      } else if (window.innerWidth >= 1200) {
        targetPosition += 100
      }

      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
      const widget = document.getElementById('wa11y-widget-icon')

      widget.focus()
      widget.click()
    }

    const newUrl = window.location.pathname
    window.history.replaceState({}, '', newUrl)
  })
}

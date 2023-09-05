export const scrollToContactForm = () => {
  const nameField = document.getElementById('name')

  window.location.hash = 'contact-us'
  nameField.focus()
}

export const navigateToHome = () => {
  window.location.href = '/?openWidget=true'
}

export const navigateToAlliBot = () => {
  window.open('https://allibot.a11ysolutions.com/', '_blank')
}

export const handleOpenWidget = (openWidget) => {
  window.addEventListener('load', () => {
    if (openWidget) {
      const targetElement = document.getElementById('our-services')

      window.scrollTo({ top: targetElement.offsetTop, behavior: 'smooth' })
      const widget = document.getElementById('wa11y-widget-icon')

      widget.focus()
      widget.click()
    }

    const newUrl = window.location.pathname
    window.history.replaceState({}, '', newUrl)
  })
}

export const scrollToContactForm = () => {
  const nameField = document.getElementById('name')

  window.location.hash = 'contact-us'
  nameField.focus()
}

export const navigateToHome = () => {
  window.location.href = '/?openWidget=true'
}

export const navigateFeedbackHub = () => {
  window.location.href = '/alliBot-feedback'
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

export const compareFeatures = (fullList, clone) => {
  let results = [];
  fullList.forEach((item) => {
    let cloneItem = clone.features.find(f => f.title === item.title);
    console.log(cloneItem);
    if (cloneItem === undefined) {
      const newArray = Array.from({ length: item.features.length + 1 }, () => false);
      results = [...results, ...newArray];
    } else {
      const newArray = Array.from({ length: item.features.length }, () => true);
      results = [...results, false, ...newArray];
    }
  });

  return results;
}

export const AlliWidgetFeaturesList= [
  {
    title: "Premium Add-ons",
    features: [
      "Full Manual Audit Offered",
      "Up to 2 Expert Hours",
      "Website Remediation",
    ],
  },
  {
    title: "Alliwidget Features",
    features: [
      "Compliance with ADA, AODA, EAA, WCAG, Sections 508 & more",
      "24/7 Customer Support",
      "Page Structure analysis",
      "Color Blind Profile",
      "Dyslexia Profile",
      "Visibility Enhancements Profile",
      "Cognitive & Learning Disabilities Profile",
      "Seizure & Epileptic Precautions Profile",
      "ADHD Support Profile",
    ],
  },
  {
    title: "Content Adjustments",
    features: [
      "Text Alignment",
      "Letter Spacing",
      "Word Spacing",
      "Line Height",
      "Readable Font options",
      "Magnify Text",
      "Read Mode",
      "Reading Guide",
      "Reading Window",
      "Virtual Keyboard availability",
      "Scale content",
    ],
  },
  {
    title: "Highlighting",
    features: [
      "Highlight Headings",
      "Highlight Links",
      "Highlight Hover",
      "Highlight Focus",
    ],
  },
  {
    title: "Color Adjustments",
    features: ["Contrast", "Saturation"],
  },
  {
    title: "Sound, Images, and Animations Adjustments",
    features: [
      "Mute Sounds",
      "Hide Images",
      "Show Image Descriptions",
      "Pause animations",
    ],
  },
  {
    title: "Allibot AI Features",
    features: [
      "AI-Powered Precision",
      "Immediate Code Solutions",
      "Up-to-Date Expertise, keeping you ahead of compliance requirements",
      "Enterprise-Level Reliability",
      "Affordable Expertise",
      "24/7 Accessibility Support",
      "Compliance Assistance",
      "Documentation Navigation",
      "Expert Consultations on WAI-ARIA Best Practices",
      "Comprehensive Accessibility Inquiries",
      "Code Analysis and Improvement Recommendations",
    ],
  },
];

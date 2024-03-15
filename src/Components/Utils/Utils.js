export const scrollToContactForm = () => {
  const nameField = document.getElementById("name");

  window.location.hash = "contact-us";
  nameField.focus();
};

export const navigateToHome = () => {
  window.location.href = "/?openWidget=true";
};

export const navigateFeedbackHub = () => {
  window.location.href = "/alliBot-feedback";
};

export const navigateToAlliBot = () => {
  window.open("https://allibot.a11ysolutions.com/", "_blank");
};

export const handleOpenWidget = (openWidget) => {
  window.addEventListener("load", () => {
    if (openWidget) {
      const targetElement = document.getElementById("our-services");

      window.scrollTo({ top: targetElement.offsetTop, behavior: "smooth" });
      const widget = document.getElementById("wa11y-widget-icon");

      widget.focus();
      widget.click();
    }

    const newUrl = window.location.pathname;
    window.history.replaceState({}, "", newUrl);
  });
};

export const pricingPlanPackages = {
  title: "Affordable Solutions for Every Business",
  packages: [
    {
      name: "AlliWidget Esential",
      description: "AlliWidget Product",
      monthPrice: "$24.99",
      annualPrice: "$249.99",
      stripeMonthLink: "https://buy.stripe.com/9AQ4iggbV5TfbXG6oo",
      stripeAnnualLink: "https://buy.stripe.com/7sIdSQaRBbdzd1KbIL",
      custom: false,
      popular: false,
      features: [
        "Compliance with ADA, AODA, EAA, WCAG, Sections 508 & more",
        "24/7 Customer Support",
        "Page Structure analysis",
        "Universal Accessibility Support Profile",
        "Enhanced Readability & Text Customization",
        "Immersive Reading Support",
        "Virtual Keyboard Availability",
        "Scale Content",
        "Comprehensive Highlighting Suite",
        "Contrast & Saturation Color Adjustments",
        "Enhanced Audio Control",
        "Visual Content Management",
        "Animation Customization",
      ],
    },
    {
      name: "AlliBot Exclusive",
      description: "AlliBot Product",
      monthPrice: "$37.99",
      annualPrice: "$379.99",
      stripeMonthLink: "https://buy.stripe.com/aEU9CA1h15Tf6Dm8wx",
      stripeAnnualLink: "https://buy.stripe.com/cN23ec4tdchD5zi4gk",
      custom: false,
      popular: false,
      features: [
        "AI-Powered Precision",
        "Immediate Code Solutions",
        "Up-to-Date Expertise",
        "Enterprise-Level Reliability",
        "24/7 Accessibility Support",
        "Advanced Accessibility Guideline Navigation",
        "Expert Consultations on WAI-ARIA Best Practices",
        "Comprehensive Accessibility Inquiries",
        "Code Analysis & Improvement Recommendations",
        "Cutting-edge AI-driven interface",
        "Intuitive Understanding of WCAG Accessibility Guidelines",
        "Streamlined Implementation Support",
        "Accelerated Accessibility Compliance",
      ],
    },
    {
      name: "All-Inclusive Pro Bundle",
      description: "AlliWidget & Allibot Products",
      monthPrice: "$49.99",
      annualPrice: "$490.99",
      stripeMonthLink: "https://buy.stripe.com/3csbKIaRB6Xj5zifZ0",
      stripeAnnualLink: "https://buy.stripe.com/cN2eWUbVFftP6Dm28d",
      custom: false,
      popular: true,
      features: [
        "Compliance with ADA, AODA, EAA, WCAG, Sections 508 & more",
        "24/7 Customer Support",
        "Page Structure analysis",
        "Universal Accessibility Support Profile",
        "Enhanced Readability & Text Customization",
        "Immersive Reading Support",
        "Virtual Keyboard Availability",
        "Scale Content",
        "Comprehensive Highlighting Suite",
        "Contrast & Saturation Color Adjustments",
        "Enhanced Audio Control",
        "Visual Content Management",
        "Animation Customization",
        "AI-Powered Precision",
        "Immediate Code Solutions",
        "Up-to-Date Expertise",
        "Enterprise-Level Reliability",
        "24/7 Accessibility Support",
        "Advanced Accessibility Guideline Navigation",
        "Expert Consultations on WAI-ARIA Best Practices",
        "Comprehensive Accessibility Inquiries",
        "Code Analysis & Improvement Recommendations",
        "Cutting-edge AI-driven interface",
        "Intuitive Understanding of WCAG Accessibility Guidelines",
        "Streamlined Implementation Support",
        "Accelerated Accessibility Compliance",
      ],
    },
    {
      name: "Enterprise",
      description: "AlliWidget & Allibot Products",
      monthPrice: "Custom",
      annualPrice: "Custom",
      stripeMonthLink: "",
      stripeAnnualLink: "",
      custom: true,
      popular: false,
      features: ["all"],
    },
  ],
};

export const AlliWidgetFeaturesList = [
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
      "Universal Accessibility Support Profile",
      "Enhanced Readability & Text Customization",
      "Immersive Reading Support",
      "Virtual Keyboard Availability",
      "Scale Content",
      "Comprehensive Highlighting Suite",
      "Contrast & Saturation Color Adjustments",
      "Enhanced Audio Control",
      "Visual Content Management",
      "Animation Customization",
    ],
  },
  {
    title: "Allibot AI Features",
    features: [
      "AI-Powered Precision",
      "Immediate Code Solutions",
      "Up-to-Date Expertise",
      "Enterprise-Level Reliability",
      "24/7 Accessibility Support",
      "Advanced Accessibility Guideline Navigation",
      "Expert Consultations on WAI-ARIA Best Practices",
      "Comprehensive Accessibility Inquiries",
      "Code Analysis & Improvement Recommendations",
      "Cutting-edge AI-driven interface",
      "Intuitive Understanding of WCAG Accessibility Guidelines",
      "Streamlined Implementation Support",
      "Accelerated Accessibility Compliance",
    ],
  },
];

export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)

  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - 80 // Offset for fixed headers if any

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    })
  }
}
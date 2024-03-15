/**
 * 
 * @param {String} templateId     id de l'élement template 
 * @param {string} containerSelector   Selecteur CSS de l'élement à cloner 
 * @returns {HTMLElement}
 */
export function getTemplate(templateId, containerSelector) {
    const template = document.getElementById(templateId).content.cloneNode(true)
    return template.querySelector(containerSelector)
}   
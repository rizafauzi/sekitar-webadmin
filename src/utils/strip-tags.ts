/* eslint-disable unicorn/prefer-dom-node-text-content */
/* eslint-disable import/prefer-default-export */

export const stripTags = (input: string): string => {
  const div = document.createElement('div')
  div.innerHTML = input
  const text = div.textContent || div.innerText || ''
  return text.trim()
}

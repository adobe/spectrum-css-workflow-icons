import { html } from 'lit';

export const iconBuilding = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><circle cx="12" cy="5" r="1"/><circle cx="8" cy="8.00019" r="1"/><circle cx="8" cy="5" r="1"/><circle cx="12" cy="8.00019" r="1"/><path d="M14.75,1H5.25c-1.24023,0-2.25,1.00977-2.25,2.25v12.5c0,1.24023,1.00977,2.25,2.25,2.25h9.5c1.24023,0,2.25-1.00977,2.25-2.25V3.25c0-1.24023-1.00977-2.25-2.25-2.25ZM11.49902,16.5h-2.49902v-3.25c0-.41309.33691-.75.75-.75h.99902c.41309,0,.75.33691.75.75v3.25ZM15.5,15.75c0,.41309-.33691.75-.75.75h-1.75098v-3.25c0-1.24023-1.00977-2.25-2.25-2.25h-.99902c-1.24023,0-2.25,1.00977-2.25,2.25v3.25h-2.25c-.41309,0-.75-.33691-.75-.75V3.25c0-.41309.33691-.75.75-.75h9.5c.41309,0,.75.33691.75.75v12.5Z"/></svg>`;
};
export default iconBuilding;

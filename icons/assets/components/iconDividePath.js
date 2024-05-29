import { html } from 'lit';

export const iconDividePath = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m15.75,7.02148h-2.75v-2.75c0-1.24023-1.00977-2.25-2.25-2.25h-6.5c-1.24023,0-2.25,1.00977-2.25,2.25v6.5c0,1.24023,1.00977,2.25,2.25,2.25h2.75v2.75c0,1.24023,1.00977,2.25,2.25,2.25h6.5c1.24023,0,2.25-1.00977,2.25-2.25v-6.5c0-1.24023-1.00977-2.25-2.25-2.25Zm-11.5,4.5c-.41309,0-.75-.33691-.75-.75v-6.5c0-.41309.33691-.75.75-.75h6.5c.41309,0,.75.33691.75.75v2.75h-2.25c-1.24023,0-2.25,1.00977-2.25,2.25v2.25h-2.75Zm7.25-3v2.25c0,.41309-.33691.75-.75.75h-2.25v-2.25c0-.41309.33691-.75.75-.75h2.25Zm5,7.25c0,.41309-.33691.75-.75.75h-6.5c-.41309,0-.75-.33691-.75-.75v-2.75h2.25c1.24023,0,2.25-1.00977,2.25-2.25v-2.25h2.75c.41309,0,.75.33691.75.75v6.5Z"/></svg>`;
};
export default iconDividePath;

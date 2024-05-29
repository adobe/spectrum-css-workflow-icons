import { html } from 'lit';

export const iconSubtractFrom = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m15.75,18.02148h-6.5c-1.24023,0-2.25-1.00977-2.25-2.25v-3.75c0-.41406.33594-.75.75-.75s.75.33594.75.75v3.75c0,.41309.33691.75.75.75h6.5c.41309,0,.75-.33691.75-.75v-6.5c0-.41309-.33691-.75-.75-.75h-3.75c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h3.75c1.24023,0,2.25,1.00977,2.25,2.25v6.5c0,1.24023-1.00977,2.25-2.25,2.25Z" opacity=".35"/><path d="m8.5,13.02148h-4.25c-1.24023,0-2.25-1.00977-2.25-2.25v-6.5c0-1.24023,1.00977-2.25,2.25-2.25h6.5c1.24023,0,2.25,1.00977,2.25,2.25v4.25h-3.75c-.41309,0-.75.33691-.75.75v3.75ZM4.25,3.52148c-.41309,0-.75.33691-.75.75v6.5c0,.41309.33691.75.75.75h2.75v-2.25c0-1.24023,1.00977-2.25,2.25-2.25h2.25v-2.75c0-.41309-.33691-.75-.75-.75h-6.5Z"/></svg>`;
};
export default iconSubtractFrom;

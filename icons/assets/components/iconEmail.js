import { html } from 'lit';

export const iconEmail = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="M16.75,2.99316H3.25c-1.24023,0-2.25,1.00977-2.25,2.25v9.5c0,1.24023,1.00977,2.25,2.25,2.25h13.5c1.24023,0,2.25-1.00977,2.25-2.25V5.24316c0-1.24023-1.00977-2.25-2.25-2.25ZM16.32935,4.49316l-5.83716,5.08301c-.2793.24414-.7041.24414-.98535,0L3.67065,4.49316h12.65869ZM16.75,15.49316H3.25c-.41309,0-.75-.33691-.75-.75V5.46191l6.02148,5.24512c.42188.36719.9502.55078,1.47852.55078s1.05664-.18359,1.47754-.55078l6.02246-5.24512v9.28125c0,.41309-.33691.75-.75.75Z" stroke-width="0"/></svg>`;
};
export default iconEmail;

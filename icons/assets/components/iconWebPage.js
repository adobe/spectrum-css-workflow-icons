import { html } from 'lit';

export const iconWebPage = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><circle cx="4.125" cy="6" r=".75"/><path d="m16.75,3H3.25c-1.24023,0-2.25,1.00977-2.25,2.25v9.5c0,1.24023,1.00977,2.25,2.25,2.25h13.5c1.24023,0,2.25-1.00977,2.25-2.25V5.25c0-1.24023-1.00977-2.25-2.25-2.25ZM2.5,5.25c0-.41309.33691-.75.75-.75h13.5c.41309,0,.75.33691.75.75v2.25H2.5v-2.25Zm14.25,10.25H3.25c-.41309,0-.75-.33691-.75-.75v-5.75h15v5.75c0,.41309-.33691.75-.75.75Z"/></svg>`;
};
export default iconWebPage;

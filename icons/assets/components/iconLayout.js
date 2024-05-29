import { html } from 'lit';

export const iconLayout = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m15.75,2H4.25c-1.24023,0-2.25,1.00977-2.25,2.25v11.5c0,1.24023,1.00977,2.25,2.25,2.25h11.5c1.24023,0,2.25-1.00977,2.25-2.25V4.25c0-1.24023-1.00977-2.25-2.25-2.25ZM3.5,4.25c0-.41309.33691-.75.75-.75h11.5c.41309,0,.75.33691.75.75v3.75H3.5v-3.75Zm0,11.5v-6.25h4.5v7h-3.75c-.41309,0-.75-.33691-.75-.75Zm12.25.75h-6.25v-7h7v6.25c0,.41309-.33691.75-.75.75Z"/></svg>`;
};
export default iconLayout;

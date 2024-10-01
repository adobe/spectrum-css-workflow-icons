import { html } from 'lit';

export const iconGradient = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><defs><linearGradient id="a" x1=".66727" y1="10" x2="16.93258" y2="10" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="var(--iconPrimary, #222)"/><stop offset=".02361" stop-color="var(--iconPrimary, #222)" stop-opacity=".96802"/><stop offset=".62746" stop-color="var(--iconPrimary, #222)" stop-opacity=".26099"/><stop offset="1" stop-color="var(--iconPrimary, #222)" stop-opacity="0"/></linearGradient></defs><rect x="3" y="3" width="14" height="14" fill="url(#a)"/><path d="m15.75,18H4.25c-1.24023,0-2.25-1.00977-2.25-2.25V4.25c0-1.24023,1.00977-2.25,2.25-2.25h11.5c1.24023,0,2.25,1.00977,2.25,2.25v11.5c0,1.24023-1.00977,2.25-2.25,2.25ZM4.25,3.5c-.41309,0-.75.33691-.75.75v11.5c0,.41309.33691.75.75.75h11.5c.41309,0,.75-.33691.75-.75V4.25c0-.41309-.33691-.75-.75-.75H4.25Z"/></svg>`;
};
export default iconGradient;

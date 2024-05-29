import { html } from 'lit';

export const iconDeviceTablet = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><circle cx="15" cy="9.99811" r="1"/><path d="m16.75,16.99805H3.25c-1.24023,0-2.25-1.00977-2.25-2.25V5.24805c0-1.24023,1.00977-2.25,2.25-2.25h13.5c1.24023,0,2.25,1.00977,2.25,2.25v9.5c0,1.24023-1.00977,2.25-2.25,2.25ZM3.25,4.49805c-.41309,0-.75.33691-.75.75v9.5c0,.41309.33691.75.75.75h13.5c.41309,0,.75-.33691.75-.75V5.24805c0-.41309-.33691-.75-.75-.75H3.25Z"/></svg>`;
};
export default iconDeviceTablet;

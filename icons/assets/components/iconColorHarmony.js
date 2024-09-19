import { html } from 'lit';

export const iconColorHarmony = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m15.75,2H4.25c-1.24023,0-2.25,1.00928-2.25,2.25v11.5c0,1.24072,1.00977,2.25,2.25,2.25h11.5c1.24023,0,2.25-1.00928,2.25-2.25V4.25c0-1.24072-1.00977-2.25-2.25-2.25Zm0,1.5c.41309,0,.75.33643.75.75v5h-5.75V3.5h5Zm-12.25.75c0-.41357.33691-.75.75-.75h5v5.75H3.5v-5Zm.75,12.25c-.41309,0-.75-.33643-.75-.75v-5h5.75v5.75h-5Zm12.25-.75c0,.41357-.33691.75-.75.75h-5v-5.75h5.75v5Z"/><rect x="10.0687" y="3.11436" width="6.95914" height="6.69751" opacity=".5"/><rect x="10.0687" y="10.11436" width="6.95914" height="6.69751" opacity=".12"/><rect x="3.0687" y="10.11436" width="6.95914" height="6.69751" opacity=".3"/></svg>`;
};
export default iconColorHarmony;

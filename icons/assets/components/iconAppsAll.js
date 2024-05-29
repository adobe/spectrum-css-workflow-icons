import { html } from 'lit';

export const iconAppsAll = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><rect x="2.25" y="2.25" width="3.5" height="3.5" rx="1" ry="1"/><rect x="8.25" y="2.25" width="3.5" height="3.5" rx="1" ry="1"/><rect x="14.25" y="2.25" width="3.5" height="3.5" rx="1" ry="1"/><rect x="2.25" y="8.25" width="3.5" height="3.5" rx="1" ry="1"/><rect x="8.25" y="8.25" width="3.5" height="3.5" rx="1" ry="1"/><rect x="14.25" y="8.25" width="3.5" height="3.5" rx="1" ry="1"/><rect x="2.25" y="14.25" width="3.5" height="3.5" rx="1" ry="1"/><rect x="8.25" y="14.25" width="3.5" height="3.5" rx="1" ry="1"/><rect x="14.25" y="14.25" width="3.5" height="3.5" rx="1" ry="1"/></svg>`;
};
export default iconAppsAll;

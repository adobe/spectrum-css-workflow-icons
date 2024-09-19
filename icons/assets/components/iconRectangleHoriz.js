import { html } from 'lit';

export const iconRectangleHoriz = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="M16.75,17H3.25c-1.24072,0-2.25-1.00928-2.25-2.25V5.25c0-1.24072,1.00928-2.25,2.25-2.25h13.5c1.24072,0,2.25,1.00928,2.25,2.25v9.5c0,1.24072-1.00928,2.25-2.25,2.25ZM3.25,4.5c-.41357,0-.75.33643-.75.75v9.5c0,.41357.33643.75.75.75h13.5c.41357,0,.75-.33643.75-.75V5.25c0-.41357-.33643-.75-.75-.75H3.25Z" stroke-width="0"/></svg>`;
};
export default iconRectangleHoriz;

import { html } from 'lit';

export const iconGridTypeLines = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="M15.75,2H4.25c-1.24072,0-2.25,1.00977-2.25,2.25v11.5c0,1.24023,1.00928,2.25,2.25,2.25h11.5c1.24072,0,2.25-1.00977,2.25-2.25V4.25c0-1.24023-1.00928-2.25-2.25-2.25ZM16.5,4.25v2.625h-3.375v-3.375h2.625c.41357,0,.75.33691.75.75ZM8.125,11.875v-3.75h3.75v3.75h-3.75ZM11.875,13.125v3.375h-3.75v-3.375h3.75ZM6.875,11.875h-3.375v-3.75h3.375v3.75ZM8.125,6.875v-3.375h3.75v3.375h-3.75ZM13.125,8.125h3.375v3.75h-3.375v-3.75ZM4.25,3.5h2.625v3.375h-3.375v-2.625c0-.41309.33643-.75.75-.75ZM3.5,15.75v-2.625h3.375v3.375h-2.625c-.41357,0-.75-.33691-.75-.75ZM15.75,16.5h-2.625v-3.375h3.375v2.625c0,.41309-.33643.75-.75.75Z"/></svg>`;
};
export default iconGridTypeLines;

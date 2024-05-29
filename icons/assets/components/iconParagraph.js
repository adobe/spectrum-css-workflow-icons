import { html } from 'lit';

export const iconParagraph = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m16.74121,2H7.125c-2.61914,0-4.75,2.13086-4.75,4.75s2.13086,4.75,4.75,4.75h.375v5.65137c0,.41406.33594.75.75.75s.75-.33594.75-.75V3.5h3v13.65137c0,.41406.33594.75.75.75s.75-.33594.75-.75V3.5h3.24121c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75ZM7.5,10h-.375c-1.79199,0-3.25-1.45801-3.25-3.25s1.45801-3.25,3.25-3.25h.375v6.5Z" stroke-width="0"/></svg>`;
};
export default iconParagraph;

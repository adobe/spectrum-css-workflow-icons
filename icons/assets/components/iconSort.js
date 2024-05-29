import { html } from 'lit';

export const iconSort = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m9.25,15.5H2.75c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h6.5c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z" stroke-width="0"/><path d="m13.25,10.5H2.75c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h10.5c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z" stroke-width="0"/><path d="m17.25,5.5H2.75c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h14.5c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z" stroke-width="0"/></svg>`;
};
export default iconSort;

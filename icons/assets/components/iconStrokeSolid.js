import { html } from 'lit';

export const iconStrokeSolid = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m18,10.75H2c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h16c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/></svg>`;
};
export default iconStrokeSolid;

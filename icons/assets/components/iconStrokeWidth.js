import { html } from 'lit';

export const iconStrokeWidth = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m18.75,14.75c0-.96631-.78369-1.75-1.75-1.75H3c-.96631,0-1.75.78369-1.75,1.75s.78369,1.75,1.75,1.75h14c.96631,0,1.75-.78369,1.75-1.75Z"/><path d="m18,5.5H2c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h16c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><path d="m18.75,9.25c0-.69043-.55957-1.25-1.25-1.25H2.5c-.69043,0-1.25.55957-1.25,1.25s.55957,1.25,1.25,1.25h15c.69043,0,1.25-.55957,1.25-1.25Z"/></svg>`;
};
export default iconStrokeWidth;

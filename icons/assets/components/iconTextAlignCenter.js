import { html } from 'lit';

export const iconTextAlignCenter = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m16.25,4.5H3.75c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h12.5c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><path d="m14.5,8.5H5.5c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h9c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><path d="m16.25,12.5H3.75c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h12.5c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><path d="m14.5,16.5H5.5c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h9c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/></svg>`;
};
export default iconTextAlignCenter;
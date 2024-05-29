import { html } from 'lit';

export const iconTextAlignRight = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m16.25,4.5H3.75c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h12.5c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><path d="m16.25,8.5H6.25c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h10c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><path d="m16.25,12.5H3.75c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h12.5c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><path d="m16.25,16.5H6.25c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h10c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/></svg>`;
};
export default iconTextAlignRight;

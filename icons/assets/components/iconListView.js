import { html } from 'lit';

export const iconListView = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m17.25,4.49811H7.75c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h9.5c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><path d="m17.25,10.49811H7.75c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h9.5c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><path d="m17.25,16.49811H7.75c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h9.5c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><path d="m4.75,4.49811h-2c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h2c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><path d="m4.75,10.49811h-2c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h2c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><path d="m4.75,16.49811h-2c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h2c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/></svg>`;
};
export default iconListView;

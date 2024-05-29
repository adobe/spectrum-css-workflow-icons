import { html } from 'lit';

export const iconTextBulleted = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m17.25,16.52148H7.25c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h10c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><path d="m17.25,10.52148H7.25c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h10c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><path d="m17.25,4.52148H7.25c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h10c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><circle cx="3.5" cy="3.77108" r="1.5"/><circle cx="3.5" cy="9.77108" r="1.5"/><circle cx="3.5" cy="15.77108" r="1.5"/></svg>`;
};
export default iconTextBulleted;

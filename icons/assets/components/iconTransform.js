import { html } from 'lit';

export const iconTransform = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m17.25,6.75c.41406,0,.75-.33594.75-.75v-3.25c0-.41406-.33594-.75-.75-.75h-3.25c-.41406,0-.75.33594-.75.75s.33594.75.75.75h1.43945l-5.43945,5.43945L4.56055,3.5h1.43945c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75h-3.25c-.41406,0-.75.33594-.75.75v3.25c0,.41406.33594.75.75.75s.75-.33594.75-.75v-1.43945l5.43945,5.43945-5.43945,5.43945v-1.43945c0-.41406-.33594-.75-.75-.75s-.75.33594-.75.75v3.25c0,.41406.33594.75.75.75h3.25c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75h-1.43945l5.43945-5.43945,5.43945,5.43945h-1.43945c-.41406,0-.75.33594-.75.75s.33594.75.75.75h3.25c.41406,0,.75-.33594.75-.75v-3.25c0-.41406-.33594-.75-.75-.75s-.75.33594-.75.75v1.43945l-5.43945-5.43945,5.43945-5.43945v1.43945c0,.41406.33594.75.75.75Z"/></svg>`;
};
export default iconTransform;

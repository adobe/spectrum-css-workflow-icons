import { html } from 'lit';

export const iconCornerRadiusTopLeft = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m18.25,14.25v-2.25c0-.41406-.33594-.75-.75-.75s-.75.33594-.75.75v2.25c0,1.24072-1.00928,2.25-2.25,2.25h-2.25c-.41406,0-.75.33594-.75.75s.33594.75.75.75h2.25c2.06787,0,3.75-1.68213,3.75-3.75Z" opacity=".35" stroke-width="0"/><path d="m18.25,8v-2.25c0-2.06787-1.68213-3.75-3.75-3.75h-2.25c-.41406,0-.75.33594-.75.75s.33594.75.75.75h2.25c1.24072,0,2.25,1.00928,2.25,2.25v2.25c0,.41406.33594.75.75.75s.75-.33594.75-.75Z" opacity=".35" stroke-width="0"/><path d="m3.75,8v-2.25c0-1.24072,1.00928-2.25,2.25-2.25h2.25c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75h-2.25c-2.06787,0-3.75,1.68213-3.75,3.75v2.25c0,.41406.33594.75.75.75s.75-.33594.75-.75Z" stroke-width="0"/><path d="m8.25,18h-2.25c-2.06787,0-3.75-1.68213-3.75-3.75v-2.25c0-.41406.33594-.75.75-.75s.75.33594.75.75v2.25c0,1.24072,1.00928,2.25,2.25,2.25h2.25c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z" opacity=".35" stroke-width="0"/></svg>`;
};
export default iconCornerRadiusTopLeft;

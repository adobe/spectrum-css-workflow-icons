import { html } from 'lit';

export const iconLine = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m2.87549,17.875c-.19189,0-.38379-.07324-.53027-.21973-.29297-.29297-.29297-.76758,0-1.06055L16.36621,2.57324c.29297-.29297.76758-.29297,1.06055,0s.29297.76758,0,1.06055L3.40576,17.65527c-.14648.14648-.33838.21973-.53027.21973Z"/></svg>`;
};
export default iconLine;

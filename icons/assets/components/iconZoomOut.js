import { html } from 'lit';

export const iconZoomOut = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m10.7998,8.75h-5.59961c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h5.59961c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><path d="m8,15c-3.85986,0-7-3.14062-7-7S4.14014,1,8,1s7,3.14062,7,7-3.14014,7-7,7Zm0-12.5c-3.03271,0-5.5,2.46777-5.5,5.5s2.46729,5.5,5.5,5.5,5.5-2.46777,5.5-5.5-2.46729-5.5-5.5-5.5Z"/><path d="m18.25,19c-.19189,0-.38379-.07324-.53027-.21973l-5.33301-5.33301c-.29297-.29297-.29297-.76758,0-1.06055s.76758-.29297,1.06055,0l5.33301,5.33301c.29297.29297.29297.76758,0,1.06055-.14648.14648-.33838.21973-.53027.21973Z"/></svg>`;
};
export default iconZoomOut;

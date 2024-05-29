import { html } from 'lit';

export const iconMinimize = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m9,11.75v4.24268c0,.41406-.33594.75-.75.75s-.75-.33594-.75-.75v-2.43213l-4.46973,4.46973c-.14648.14648-.33838.21973-.53027.21973s-.38379-.07324-.53027-.21973c-.29297-.29297-.29297-.76758,0-1.06055l4.46973-4.46973h-2.43213c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h4.24268c.41406,0,.75.33594.75.75Z"/><path d="m18.03027,1.96973c-.29297-.29297-.76758-.29297-1.06055,0l-4.46973,4.46973v-2.43213c0-.41406-.33594-.75-.75-.75s-.75.33594-.75.75v4.24268c0,.41406.33594.75.75.75h4.24268c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75h-2.43213l4.46973-4.46973c.29297-.29297.29297-.76758,0-1.06055Z"/></svg>`;
};
export default iconMinimize;

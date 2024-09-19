import { html } from 'lit';

export const iconClose = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m11.06061,10l5.20648-5.20605c.29297-.29297.29297-.76758,0-1.06055s-.76758-.29297-1.06055,0l-5.20654,5.20605L4.79346,3.7334c-.29297-.29297-.76758-.29297-1.06055,0s-.29297.76758,0,1.06055l5.20648,5.20605-5.20648,5.20605c-.29297.29297-.29297.76758,0,1.06055.14648.14648.33838.21973.53027.21973s.38379-.07324.53027-.21973l5.20654-5.20605,5.20654,5.20605c.14648.14648.33838.21973.53027.21973s.38379-.07324.53027-.21973c.29297-.29297.29297-.76758,0-1.06055l-5.20648-5.20605Z"/></svg>`;
};
export default iconClose;

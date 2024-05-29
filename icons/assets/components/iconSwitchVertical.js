import { html } from 'lit';

export const iconSwitchVertical = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m9.53027,4.46973l-3-3c-.29297-.29297-.76758-.29297-1.06055,0l-3,3c-.29297.29297-.29297.76758,0,1.06055s.76758.29297,1.06055,0l1.71973-1.71973v12.18945c0,.41406.33594.75.75.75s.75-.33594.75-.75V3.81055l1.71973,1.71973c.14648.14648.33838.21973.53027.21973s.38379-.07324.53027-.21973c.29297-.29297.29297-.76758,0-1.06055Z"/><path d="m17.53027,14.46973c-.29297-.29297-.76758-.29297-1.06055,0l-1.71973,1.71973V4c0-.41406-.33594-.75-.75-.75s-.75.33594-.75.75v12.18945l-1.71973-1.71973c-.29297-.29297-.76758-.29297-1.06055,0s-.29297.76758,0,1.06055l3,3c.14648.14648.33838.21973.53027.21973s.38379-.07324.53027-.21973l3-3c.29297-.29297.29297-.76758,0-1.06055Z"/></svg>`;
};
export default iconSwitchVertical;

import { html } from 'lit';

export const iconLineHeight = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m4.96973,13.96973l-.46973.46973V5.06055l.46973.46973c.14648.14648.33789.21973.53027.21973s.38379-.07324.53027-.21973c.29297-.29297.29297-.76758,0-1.06055l-1.75-1.75c-.29297-.29297-.76758-.29297-1.06055,0l-1.75,1.75c-.29297.29297-.29297.76758,0,1.06055s.76758.29297,1.06055,0l.46973-.46973v9.37891l-.46973-.46973c-.29297-.29297-.76758-.29297-1.06055,0s-.29297.76758,0,1.06055l1.75,1.75c.06909.06909.15186.12354.24341.16162s.18896.05811.28687.05811.19531-.02002.28687-.05811.17432-.09253.24341-.16162l1.75-1.75c.29297-.29297.29297-.76758,0-1.06055s-.76758-.29297-1.06055,0Z"/><path d="m17.25,4.5h-7.5c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h7.5c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><path d="m17.25,10.5h-7.5c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h7.5c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><path d="m17.25,16.5h-7.5c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h7.5c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/></svg>`;
};
export default iconLineHeight;
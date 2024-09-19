import { html } from 'lit';

export const iconUpload = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m13.52734,10.49121l-3.00244-2.99805c-.29297-.29297-.76709-.29297-1.06006,0l-2.99756,2.99805c-.29297.29297-.29297.76758,0,1.06055.14648.14648.33838.21973.53027.21973s.38379-.07324.53027-.21973l1.72217-1.72217v8.18018c0,.41406.33594.75.75.75s.75-.33594.75-.75v-8.17285l1.71777,1.71484c.29297.29297.76758.29297,1.06055,0,.29248-.29297.29248-.76855-.00098-1.06055Z" stroke-width="0"/><path d="m15.75,17h-2.79883c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h2.79883c.41357,0,.75-.33691.75-.75V4.25c0-.41309-.33643-.75-.75-.75H4.25c-.41357,0-.75.33691-.75.75v10.5c0,.41309.33643.75.75.75h2.72559c.41406,0,.75.33594.75.75s-.33594.75-.75.75h-2.72559c-1.24072,0-2.25-1.00977-2.25-2.25V4.25c0-1.24023,1.00928-2.25,2.25-2.25h11.5c1.24072,0,2.25,1.00977,2.25,2.25v10.5c0,1.24023-1.00928,2.25-2.25,2.25Z" stroke-width="0"/></svg>`;
};
export default iconUpload;

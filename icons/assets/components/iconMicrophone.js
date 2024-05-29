import { html } from 'lit';

export const iconMicrophone = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m10,12.75c-2.20557,0-4-1.79395-4-4v-3.75c0-2.20605,1.79443-4,4-4s4,1.79395,4,4v3.75c0,2.20605-1.79443,4-4,4Zm0-10.25c-1.37842,0-2.5,1.12109-2.5,2.5v3.75c0,1.37891,1.12158,2.5,2.5,2.5s2.5-1.12109,2.5-2.5v-3.75c0-1.37891-1.12158-2.5-2.5-2.5Z" stroke-width="0"/><path d="m16.25,7.31641c-.41406,0-.75.33594-.75.75v.68359c0,3.03223-2.46729,5.5-5.5,5.5s-5.5-2.46777-5.5-5.5v-.68359c0-.41406-.33594-.75-.75-.75s-.75.33594-.75.75v.68359c0,3.60596,2.7417,6.58276,6.25,6.9585v1.7915h-3.25c-.41406,0-.75.33594-.75.75s.33594.75.75.75h8c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75h-3.25v-1.7915c3.5083-.37573,6.25-3.35254,6.25-6.9585v-.68359c0-.41406-.33594-.75-.75-.75Z" stroke-width="0"/></svg>`;
};
export default iconMicrophone;

import { html } from 'lit';

export const iconAudioWave = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m2.75,11.75c-.41406,0-.75-.33594-.75-.75v-2.5c0-.41406.33594-.75.75-.75s.75.33594.75.75v2.5c0,.41406-.33594.75-.75.75Z" stroke-width="0"/><path d="m16.75,12.75c-.41406,0-.75-.33594-.75-.75v-4.5c0-.41406.33594-.75.75-.75s.75.33594.75.75v4.5c0,.41406-.33594.75-.75.75Z" stroke-width="0"/><path d="m6.25,16.5c-.41406,0-.75-.33594-.75-.75V3.75c0-.41406.33594-.75.75-.75s.75.33594.75.75v12c0,.41406-.33594.75-.75.75Z" stroke-width="0"/><path d="m9.75,14.5c-.41406,0-.75-.33594-.75-.75V5.75c0-.41406.33594-.75.75-.75s.75.33594.75.75v8c0,.41406-.33594.75-.75.75Z" stroke-width="0"/><path d="m13.25,19c-.41406,0-.75-.33594-.75-.75V1.75c0-.41406.33594-.75.75-.75s.75.33594.75.75v16.5c0,.41406-.33594.75-.75.75Z" stroke-width="0"/></svg>`;
};
export default iconAudioWave;

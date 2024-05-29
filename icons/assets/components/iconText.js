import { html } from 'lit';

export const iconText = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m14.58984,2H5.41016c-1.24072,0-2.25,1.00977-2.25,2.25v1.11035c0,.41406.33594.75.75.75s.75-.33594.75-.75v-1.11035c0-.41309.33643-.75.75-.75h3.83984v13h-1.56982c-.41406,0-.75.33594-.75.75s.33594.75.75.75h4.63965c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75h-1.56982V3.5h3.83984c.41357,0,.75.33691.75.75v1.11035c0,.41406.33594.75.75.75s.75-.33594.75-.75v-1.11035c0-1.24023-1.00928-2.25-2.25-2.25Z"/></svg>`;
};
export default iconText;

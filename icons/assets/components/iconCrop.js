import { html } from 'lit';

export const iconCrop = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m15.25,13.19141c-.41406,0-.75-.33594-.75-.75v-6.19141c0-.41309-.33691-.75-.75-.75h-6.2373c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h6.2373c1.24023,0,2.25,1.00977,2.25,2.25v6.19141c0,.41406-.33594.75-.75.75Z"/><path d="m18.60156,14.5H6.25c-.41309,0-.75-.33691-.75-.75V1.39844c0-.41406-.33594-.75-.75-.75s-.75.33594-.75.75v2.60156H1.39844c-.41406,0-.75.33594-.75.75s.33594.75.75.75h2.60156v8.25c0,1.24023,1.00977,2.25,2.25,2.25h8.25v2.62305c0,.41406.33594.75.75.75s.75-.33594.75-.75v-2.62305h2.60156c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75Z"/></svg>`;
};
export default iconCrop;

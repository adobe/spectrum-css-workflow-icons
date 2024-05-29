import { html } from 'lit';

export const iconDistributeSpaceVertically = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m14.99996,9.25v1.5c0,1.24023-1.00977,2.25-2.25,2.25h-5.5c-1.24023,0-2.25-1.00977-2.25-2.25v-1.5c0-1.24023,1.00977-2.25,2.25-2.25h5.5c1.24023,0,2.25,1.00977,2.25,2.25Zm-8.5,1.5c0,.41309.33691.75.75.75h5.5c.41309,0,.75-.33691.75-.75v-1.5c0-.41309-.33691-.75-.75-.75h-5.5c-.41309,0-.75.33691-.75.75v1.5Z"/><path d="m17.99996,3.75c0,.41406-.33594.75-.75.75H2.74996c-.41406,0-.75-.33594-.75-.75,0-.41406.33594-.75.75-.75h14.5c.41406,0,.75.33594.75.75Z"/><path d="m17.99996,16.25c0,.41406-.33594.75-.75.75H2.74996c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h14.5c.41406,0,.75.33594.75.75Z"/></svg>`;
};
export default iconDistributeSpaceVertically;

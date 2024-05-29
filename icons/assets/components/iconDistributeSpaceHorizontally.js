import { html } from 'lit';

export const iconDistributeSpaceHorizontally = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m10.75,14.99996h-1.5c-1.24023,0-2.25-1.00977-2.25-2.25v-5.5c0-1.24023,1.00977-2.25,2.25-2.25h1.5c1.24023,0,2.25,1.00977,2.25,2.25v5.5c0,1.24023-1.00977,2.25-2.25,2.25Zm-1.5-8.5c-.41309,0-.75.33691-.75.75v5.5c0,.41309.33691.75.75.75h1.5c.41309,0,.75-.33691.75-.75v-5.5c0-.41309-.33691-.75-.75-.75h-1.5Z"/><path d="m16.25,17.99996c-.41406,0-.75-.33594-.75-.75V2.74996c0-.41406.33594-.75.75-.75s.75.33594.75.75v14.5c0,.41406-.33594.75-.75.75Z"/><path d="m3.75,17.99996c-.41406,0-.75-.33594-.75-.75V2.74996c0-.41406.33594-.75.75-.75s.75.33594.75.75v14.5c0,.41406-.33594.75-.75.75Z"/></svg>`;
};
export default iconDistributeSpaceHorizontally;

import { html } from 'lit';

export const iconAlignTop = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m14.75,13h-1.5c-1.24072,0-2.25-1.00977-2.25-2.25v-3.5c0-1.24023,1.00928-2.25,2.25-2.25h1.5c1.24072,0,2.25,1.00977,2.25,2.25v3.5c0,1.24023-1.00928,2.25-2.25,2.25Zm-1.5-6.5c-.41357,0-.75.33691-.75.75v3.5c0,.41309.33643.75.75.75h1.5c.41357,0,.75-.33691.75-.75v-3.5c0-.41309-.33643-.75-.75-.75h-1.5Z"/><path d="m6.75,17h-1.5c-1.24072,0-2.25-1.00977-2.25-2.25v-7.5c0-1.24023,1.00928-2.25,2.25-2.25h1.5c1.24072,0,2.25,1.00977,2.25,2.25v7.5c0,1.24023-1.00928,2.25-2.25,2.25Zm-1.5-10.5c-.41357,0-.75.33691-.75.75v7.5c0,.41309.33643.75.75.75h1.5c.41357,0,.75-.33691.75-.75v-7.5c0-.41309-.33643-.75-.75-.75h-1.5Z"/><path d="m18.25,3.5H1.75c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h16.5c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/></svg>`;
};
export default iconAlignTop;
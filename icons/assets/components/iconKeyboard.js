import { html } from 'lit';

export const iconKeyboard = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m16.75,15H3.25c-1.24072,0-2.25-1.00977-2.25-2.25v-6.5c0-1.24023,1.00928-2.25,2.25-2.25h13.5c1.24072,0,2.25,1.00977,2.25,2.25v6.5c0,1.24023-1.00928,2.25-2.25,2.25ZM3.25,5.5c-.41357,0-.75.33691-.75.75v6.5c0,.41309.33643.75.75.75h13.5c.41357,0,.75-.33691.75-.75v-6.5c0-.41309-.33643-.75-.75-.75H3.25Z"/><path d="m12.25,12h-4.5c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h4.5c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><circle cx="5" cy="8" r="1"/><circle cx="8.33333" cy="8" r="1"/><circle cx="11.66667" cy="8" r="1"/><circle cx="15" cy="8" r="1"/><circle cx="5" cy="11" r="1"/><circle cx="15" cy="11" r="1"/></svg>`;
};
export default iconKeyboard;

import { html } from 'lit';

export const iconRectangleSelect = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m4.25,2c-1.24072,0-2.25,1.00928-2.25,2.25,0,.41406.33594.75.75.75s.75-.33594.75-.75c0-.41357.33643-.75.75-.75.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75Z"/><path d="m8.5,16.5h-1.25c-.41406,0-.75.33594-.75.75s.33594.75.75.75h1.25c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75Z"/><path d="m15.75,3.5c.41357,0,.75.33643.75.75,0,.41406.33594.75.75.75s.75-.33594.75-.75c0-1.24072-1.00928-2.25-2.25-2.25-.41406,0-.75.33594-.75.75s.33594.75.75.75Z"/><path d="m2.75,13.5c.41406,0,.75-.33594.75-.75v-1.25c0-.41406-.33594-.75-.75-.75s-.75.33594-.75.75v1.25c0,.41406.33594.75.75.75Z"/><path d="m2.75,9.25c.41406,0,.75-.33594.75-.75v-1.25c0-.41406-.33594-.75-.75-.75s-.75.33594-.75.75v1.25c0,.41406.33594.75.75.75Z"/><path d="m4.25,16.5c-.41357,0-.75-.33643-.75-.75,0-.41406-.33594-.75-.75-.75s-.75.33594-.75.75c0,1.24072,1.00928,2.25,2.25,2.25.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75Z"/><path d="m8.5,2h-1.25c-.41406,0-.75.33594-.75.75s.33594.75.75.75h1.25c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75Z"/><path d="m17.25,15c-.41406,0-.75.33594-.75.75,0,.41357-.33643.75-.75.75-.41406,0-.75.33594-.75.75s.33594.75.75.75c1.24072,0,2.25-1.00928,2.25-2.25,0-.41406-.33594-.75-.75-.75Z"/><path d="m17.25,6.5c-.41406,0-.75.33594-.75.75v1.25c0,.41406.33594.75.75.75s.75-.33594.75-.75v-1.25c0-.41406-.33594-.75-.75-.75Z"/><path d="m17.25,10.75c-.41406,0-.75.33594-.75.75v1.25c0,.41406.33594.75.75.75s.75-.33594.75-.75v-1.25c0-.41406-.33594-.75-.75-.75Z"/><path d="m12.75,2h-1.25c-.41406,0-.75.33594-.75.75s.33594.75.75.75h1.25c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75Z"/><path d="m12.75,16.5h-1.25c-.41406,0-.75.33594-.75.75s.33594.75.75.75h1.25c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75Z"/></svg>`;
};
export default iconRectangleSelect;

import { html } from 'lit';

export const iconLock = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="M11.25,11.5c0-.68945-.56055-1.25-1.25-1.25s-1.25.56055-1.25,1.25c0,.40259.20361.74487.5.97363v.77637c0,.41406.33594.75.75.75s.75-.33594.75-.75v-.77637c.29639-.22876.5-.57104.5-.97363Z"/><path d="M15,7.02539v-.52539c0-2.75684-2.24316-5-5-5s-5,2.24316-5,5v.52539c-1.12158.12622-2,1.07007-2,2.22461v6.5c0,1.24023,1.00977,2.25,2.25,2.25h9.5c1.24023,0,2.25-1.00977,2.25-2.25v-6.5c0-1.15454-.87842-2.09839-2-2.22461ZM10,3c1.92969,0,3.5,1.57031,3.5,3.5v.5h-7v-.5c0-1.92969,1.57031-3.5,3.5-3.5ZM15.5,15.75c0,.41309-.33691.75-.75.75H5.25c-.41309,0-.75-.33691-.75-.75v-6.5c0-.41309.33691-.75.75-.75h9.5c.41309,0,.75.33691.75.75v6.5Z"/></svg>`;
};
export default iconLock;

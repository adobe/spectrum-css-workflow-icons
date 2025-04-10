import { html } from 'lit';

export const iconApp = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="M13.25,18h-6.5c-2.61914,0-4.75-2.13086-4.75-4.75v-6.5c0-2.61914,2.13086-4.75,4.75-4.75h6.5c2.61914,0,4.75,2.13086,4.75,4.75v6.5c0,2.61914-2.13086,4.75-4.75,4.75ZM6.75,3.5c-1.79199,0-3.25,1.45801-3.25,3.25v6.5c0,1.79199,1.45801,3.25,3.25,3.25h6.5c1.79199,0,3.25-1.45801,3.25-3.25v-6.5c0-1.79199-1.45801-3.25-3.25-3.25h-6.5Z" stroke-width="0"/><path d="M13.44043,12.72461l-2.75-6.5c-.23438-.55469-1.14648-.55469-1.38086,0l-2.75,6.5c-.16211.38086.0166.82129.39844.98242.37891.16602.82129-.0166.98242-.39844l.76538-1.80859h2.58838l.76538,1.80859c.12109.28613.39844.45801.69043.45801.09766,0,.19727-.01855.29199-.05957.38184-.16113.56055-.60156.39844-.98242ZM9.34033,10l.65967-1.55859.65967,1.55859h-1.31934Z" stroke-width="0"/></svg>`;
};
export default iconApp;

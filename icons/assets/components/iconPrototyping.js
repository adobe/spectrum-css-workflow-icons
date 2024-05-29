import { html } from 'lit';

export const iconPrototyping = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m17.72516,1h-.66809c-1.27625,0-2.44757.81665-2.79663,2h-.26025c-2.61914,0-4.75,2.13086-4.75,4.75v4.5c0,1.79199-1.45801,3.25-3.25,3.25h-.26514c-.32782-1.1521-1.37762-2-2.63489-2h-.82495c-.15192,0-.27502.12305-.27502.2749v4.95007c0,.15186.12311.27502.27502.27502h.66809c1.27625,0,2.44757-.81665,2.79663-2h.26025c2.61914,0,4.75-2.13086,4.75-4.75v-4.5c0-1.79199,1.45801-3.25,3.25-3.25h.26514c.32782,1.1521,1.37762,2,2.63489,2h.82495c.15192,0,.27502-.12317.27502-.27502V1.2749c0-.15186-.12311-.2749-.27502-.2749Z"/></svg>`;
};
export default iconPrototyping;

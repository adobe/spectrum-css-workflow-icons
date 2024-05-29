import { html } from 'lit';

export const iconPercentage = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m2.5,18.25c-.19189,0-.38379-.07324-.53027-.21973-.29297-.29297-.29297-.76758,0-1.06055L16.96973,1.96973c.29297-.29297.76758-.29297,1.06055,0s.29297.76758,0,1.06055L3.03027,18.03027c-.14648.14648-.33838.21973-.53027.21973Z" stroke-width="0"/><path d="m5.25,8.5c-1.79199,0-3.25-1.45801-3.25-3.25s1.45801-3.25,3.25-3.25,3.25,1.45801,3.25,3.25-1.45801,3.25-3.25,3.25Zm0-5c-.96484,0-1.75.78516-1.75,1.75s.78516,1.75,1.75,1.75,1.75-.78516,1.75-1.75-.78516-1.75-1.75-1.75Z" stroke-width="0"/><path d="m14.75,18c-1.79199,0-3.25-1.45801-3.25-3.25s1.45801-3.25,3.25-3.25,3.25,1.45801,3.25,3.25-1.45801,3.25-3.25,3.25Zm0-5c-.96484,0-1.75.78516-1.75,1.75s.78516,1.75,1.75,1.75,1.75-.78516,1.75-1.75-.78516-1.75-1.75-1.75Z" stroke-width="0"/></svg>`;
};
export default iconPercentage;

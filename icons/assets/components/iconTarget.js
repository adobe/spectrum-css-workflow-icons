import { html } from 'lit';

export const iconTarget = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><circle cx="10" cy="10" r="1.5" stroke-width="0"/><path d="M10,18.75c-4.82471,0-8.75-3.9248-8.75-8.75S5.17529,1.25,10,1.25s8.75,3.9248,8.75,8.75-3.92529,8.75-8.75,8.75ZM10,2.75c-3.99756,0-7.25,3.25195-7.25,7.25s3.25244,7.25,7.25,7.25,7.25-3.25195,7.25-7.25-3.25244-7.25-7.25-7.25Z" stroke-width="0"/><path d="M10,15c-2.75684,0-5-2.24316-5-5s2.24316-5,5-5,5,2.24316,5,5-2.24316,5-5,5ZM10,6.5c-1.92969,0-3.5,1.57031-3.5,3.5s1.57031,3.5,3.5,3.5,3.5-1.57031,3.5-3.5-1.57031-3.5-3.5-3.5Z" stroke-width="0"/></svg>`;
};
export default iconTarget;

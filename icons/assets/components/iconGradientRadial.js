import { html } from 'lit';

export const iconGradientRadial = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false, prefixId = '' } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><defs><radialGradient id="${prefixId}__a" cx="10" cy="10" fx="10" fy="10" r="8.24056" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="var(--iconPrimary, #222)"/><stop offset=".02361" stop-color="var(--iconPrimary, #222)" stop-opacity=".96802"/><stop offset=".62746" stop-color="var(--iconPrimary, #222)" stop-opacity=".26099"/><stop offset="1" stop-color="var(--iconPrimary, #222)" stop-opacity="0"/></radialGradient></defs><circle cx="10" cy="10" r="7.25" fill="url(#${prefixId}__a)"/><path d="m10,18.75c-4.82471,0-8.75-3.9248-8.75-8.75S5.17529,1.25,10,1.25s8.75,3.9248,8.75,8.75-3.92529,8.75-8.75,8.75Zm0-16c-3.99756,0-7.25,3.25195-7.25,7.25s3.25244,7.25,7.25,7.25,7.25-3.25195,7.25-7.25-3.25244-7.25-7.25-7.25Z"/></svg>`;
};
export default iconGradientRadial;

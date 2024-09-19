import { html } from 'lit';

export const iconRemoveCircle = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="M10,18.7793c-4.8252,0-8.75-3.9248-8.75-8.75S5.1748,1.2793,10,1.2793s8.75,3.9248,8.75,8.75-3.9248,8.75-8.75,8.75ZM10,2.7793c-3.99805,0-7.25,3.25195-7.25,7.25s3.25195,7.25,7.25,7.25,7.25-3.25195,7.25-7.25-3.25195-7.25-7.25-7.25Z"/><path d="M13.25,10.75h-6.5c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h6.5c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/></svg>`;
};
export default iconRemoveCircle;

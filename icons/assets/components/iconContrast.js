import { html } from 'lit';

export const iconContrast = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m10,18.7793c-4.8252,0-8.75-3.9248-8.75-8.75S5.1748,1.2793,10,1.2793s8.75,3.9248,8.75,8.75-3.9248,8.75-8.75,8.75Zm0-16c-3.99805,0-7.25,3.25195-7.25,7.25s3.25195,7.25,7.25,7.25,7.25-3.25195,7.25-7.25-3.25195-7.25-7.25-7.25Z"/><path d="m10.00001,14.38357c0,.65333.61464,1.12149,1.25098.97349,2.43486-.5663,4.24901-2.74982,4.24901-5.35705s-1.81415-4.79075-4.24901-5.35705c-.63635-.148-1.25098.32016-1.25098.97349v8.76713Z"/></svg>`;
};
export default iconContrast;

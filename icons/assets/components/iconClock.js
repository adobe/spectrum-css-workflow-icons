import { html } from 'lit';

export const iconClock = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m10,18.75c-4.8252,0-8.75-3.9248-8.75-8.75S5.1748,1.25,10,1.25s8.75,3.9248,8.75,8.75-3.9248,8.75-8.75,8.75Zm0-16c-3.99805,0-7.25,3.25195-7.25,7.25s3.25195,7.25,7.25,7.25,7.25-3.25195,7.25-7.25-3.25195-7.25-7.25-7.25Z"/><path d="m13.24902,12.64453c-.12891,0-.25977-.0332-.37891-.10352l-3.2207-1.89453c-.22949-.13477-.37012-.38086-.37012-.64648v-5c0-.41406.33594-.75.75-.75s.75.33594.75.75v4.57129l2.85059,1.67676c.35742.20996.47656.66992.2666,1.02637-.13965.23828-.39062.37012-.64746.37012Z"/></svg>`;
};
export default iconClock;

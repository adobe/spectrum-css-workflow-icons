import { html } from 'lit';

export const iconChevronDownSize300 = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="M10.67188,13.36133l5.33203-5.33203c.36914-.37109.36914-.97266,0-1.34375-.37109-.37012-.97266-.37012-1.34375,0l-4.66016,4.66016-4.66016-4.66016c-.37109-.37012-.97266-.37012-1.34375,0-.18457.18555-.27734.42871-.27734.67188s.09277.48633.27734.67188l5.33203,5.33203c.37109.37012.97266.37012,1.34375,0h.00001Z"/></svg>`;
};
export default iconChevronDownSize300;

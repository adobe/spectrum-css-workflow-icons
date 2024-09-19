import { html } from 'lit';

export const iconChevronLeft = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m12.2373,16.45508c-.19629,0-.39355-.07715-.54004-.23047l-5.4873-5.70312c-.28027-.29004-.28027-.74902,0-1.03906l5.5-5.7168c.28711-.29883.7627-.30762,1.05957-.02051.29883.28711.30859.76172.02051,1.05957l-4.99902,5.19727,4.98633,5.18359c.28809.29785.27832.77246-.02051,1.05957-.14453.14062-.33203.20996-.51953.20996Z"/></svg>`;
};
export default iconChevronLeft;

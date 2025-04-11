import { html } from 'lit';

export const iconChevronUp = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="M3.54492,12.2373c0-.19629.07715-.39355.23047-.54004l5.70312-5.4873c.29004-.28027.74902-.28027,1.03906,0l5.7168,5.5c.29883.28711.30762.7627.02051,1.05957-.28711.29883-.76172.30859-1.05957.02051l-5.19727-4.99902-5.18359,4.98633c-.29785.28809-.77246.27832-1.05957-.02051-.14062-.14453-.20996-.33203-.20996-.51954Z"/></svg>`;
};
export default iconChevronUp;

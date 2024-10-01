import { html } from 'lit';

export const iconChevronRight = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m7.75,16.46484c-.1875,0-.37402-.06934-.51953-.20996-.29883-.28711-.30859-.76172-.02051-1.05957l4.99902-5.19727-4.98633-5.18359c-.28809-.29785-.27832-.77246.02051-1.05957.2959-.28711.77344-.2793,1.05957.02051l5.4873,5.70312c.28027.29004.28027.74902,0,1.03906l-5.5,5.7168c-.14648.15332-.34375.23047-.54004.23047Z"/></svg>`;
};
export default iconChevronRight;

import { html } from 'lit';

export const iconChevronDown = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="M3.75488,7.24316c.28711-.29883.76172-.3086,1.05957-.02051l5.18359,4.98633,5.19727-4.99902c.29785-.28808.77246-.27832,1.05957.02051.28711.29687.27832.77246-.02051,1.05957l-5.7168,5.5c-.29004.28027-.74902.28027-1.03906,0l-5.70312-5.4873c-.15332-.14649-.23047-.34375-.23047-.54004,0-.18751.06934-.37501.20996-.51954Z"/></svg>`;
};
export default iconChevronDown;

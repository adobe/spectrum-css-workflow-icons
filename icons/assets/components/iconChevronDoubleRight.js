import { html } from 'lit';

export const iconChevronDoubleRight = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="M9.61805,16.24512c-.29883-.28711-.3086-.76172-.02051-1.05957l4.98633-5.18359-4.99902-5.19727c-.28808-.29785-.27832-.77246.02051-1.05957.29687-.28711.77246-.27832,1.05957.02051l5.5,5.7168c.28027.29004.28027.74902,0,1.03906l-5.4873,5.70312c-.14649.15332-.34375.23047-.54004.23047-.18751,0-.37501-.06934-.51954-.20996Z"/><path d="M3.86805,16.24512c-.29883-.28711-.3086-.76172-.02051-1.05957l4.98633-5.18359L3.83485,4.80469c-.28808-.29785-.27832-.77246.02051-1.05957.29687-.28711.77246-.27832,1.05957.02051l5.5,5.7168c.28027.29004.28027.74902,0,1.03906l-5.4873,5.70312c-.14649.15332-.34375.23047-.54004.23047-.18751,0-.37501-.06934-.51954-.20996Z"/></svg>`;
};
export default iconChevronDoubleRight;

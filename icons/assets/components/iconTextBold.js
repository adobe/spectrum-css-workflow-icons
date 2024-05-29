import { html } from 'lit';

export const iconTextBold = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m13.98926,2.01465H5.51074c-1.38477,0-2.51074,1.17773-2.51074,2.625v1.11035c0,.62109.50391,1.125,1.125,1.125s1.125-.50391,1.125-1.125v-1.11035c0-.2207.1377-.375.26074-.375h2.48926v11.44531c0,.00488.00146.00977.00146.01465h-.57178c-.62109,0-1.125.50391-1.125,1.125s.50391,1.125,1.125,1.125h4.64062c.62109,0,1.125-.50391,1.125-1.125s-.50391-1.125-1.125-1.125h-.57178c0-.00488.00146-.00977.00146-.01465V4.26465h2.48926c.12305,0,.26074.1543.26074.375v1.11035c0,.62109.50391,1.125,1.125,1.125s1.125-.50391,1.125-1.125v-1.11035c0-1.44727-1.12598-2.625-2.51074-2.625Z" stroke-width="0"/></svg>`;
};
export default iconTextBold;

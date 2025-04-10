import { html } from 'lit';

export const iconBookmark = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="M5.25098,18.99974c-.16016,0-.32227-.03125-.47754-.0957-.46973-.19336-.77344-.64746-.77344-1.15527V4.24974c0-1.24023,1.00977-2.25,2.25-2.25h7.5c1.24023,0,2.25,1.00977,2.25,2.25v13.49902c0,.50781-.30371.96191-.77344,1.15527-.4707.19531-1.00488.08691-1.36328-.27441l-3.86328-3.88672-3.86328,3.88672c-.24023.24219-.55957.37012-.88574.37012ZM6.25,3.49974c-.41309,0-.75.33691-.75.75v12.89258l3.43555-3.45605c.57031-.57227,1.55957-.57129,2.12793-.00098l3.43652,3.45703V4.24974c0-.41309-.33691-.75-.75-.75h-7.5Z" stroke-width="0"/></svg>`;
};
export default iconBookmark;

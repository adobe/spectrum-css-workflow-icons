import { html } from 'lit';

export const iconStickyNote = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m15.75,2H4.25c-1.24072,0-2.25,1.00977-2.25,2.25v11.5c0,1.24023,1.00928,2.25,2.25,2.25h7.87891c.59229,0,1.17188-.24023,1.59082-.65918l3.62109-3.62109c.41895-.41895.65918-.99902.65918-1.59082v-7.87891c0-1.24023-1.00928-2.25-2.25-2.25ZM3.5,15.75V4.25c0-.41309.33643-.75.75-.75h11.5c.41357,0,.75.33691.75.75v6.75h-3.25c-1.24072,0-2.25,1.00977-2.25,2.25v3.25h-6.75c-.41357,0-.75-.33691-.75-.75Zm9.15918.53027c-.04565.04565-.10382.07385-.15918.10596v-3.13623c0-.41309.33643-.75.75-.75h3.13629c-.03217.05542-.06036.11353-.10602.15918l-3.62109,3.62109Z"/></svg>`;
};
export default iconStickyNote;

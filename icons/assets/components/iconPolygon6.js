import { html } from 'lit';

export const iconPolygon6 = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m13.31982,18h-6.63965c-.80127,0-1.54834-.43164-1.94824-1.125l-3.31982-5.75c-.40088-.69336-.40088-1.55664,0-2.25l3.31982-5.75c.3999-.69336,1.14697-1.125,1.94824-1.125h6.63965c.80127,0,1.54834.43164,1.94824,1.125l3.31982,5.75c.40088.69336.40088,1.55664,0,2.25l-3.31982,5.75c-.3999.69336-1.14697,1.125-1.94824,1.125ZM6.68018,3.5c-.26709,0-.51562.14355-.64893.375l-3.32031,5.75c-.13379.23145-.13379.51855,0,.75l3.31982,5.75c.13379.23145.38232.375.64941.375h6.63965c.26709,0,.51562-.14355.64893-.375l3.32031-5.75c.13379-.23145.13379-.51855,0-.75l-3.31982-5.75c-.13379-.23145-.38232-.375-.64941-.375h-6.63965Z" stroke-width="0"/></svg>`;
};
export default iconPolygon6;

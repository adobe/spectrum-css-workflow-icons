import { html } from 'lit';

export const iconCheckmark = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="M7.86426,15.73438c-.22266,0-.43359-.09863-.57617-.26953l-3.74707-4.49805c-.26562-.31836-.22168-.79199.0957-1.05664.31738-.26562.79004-.22363,1.05664.0957l3.15332,3.78613,7.43945-9.46875c.25586-.32617.72852-.38184,1.05273-.12695.32617.25586.38281.72754.12695,1.05273l-8.01172,10.19824c-.13965.17871-.35254.28418-.5791.28711h-.01074Z"/></svg>`;
};
export default iconCheckmark;

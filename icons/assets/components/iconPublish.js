import { html } from 'lit';

export const iconPublish = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="M18.7793,1.21875c-.21191-.21094-.52734-.27539-.80469-.16602L1.47461,7.56152c-.26953.10547-.45312.3584-.47266.64746s.12891.56348.38184.7041l6.25488,3.49512,3.52148,6.21191c.13379.23535.38379.37988.65234.37988.01758,0,.03613-.00098.05371-.00195.28906-.02051.54004-.20605.64453-.47559L18.94824,2.02246c.1084-.27734.04199-.59375-.16895-.80371ZM15.16907,3.77148l-7.11292,7.15161-4.55908-2.54712L15.16907,3.77148ZM11.6875,16.50781l-2.56641-4.52661,7.12842-7.16724-4.56201,11.69385Z" stroke-width="0"/></svg>`;
};
export default iconPublish;

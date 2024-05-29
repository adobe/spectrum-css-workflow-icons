import { html } from 'lit';

export const iconSend = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m18.64851,9.97351c-.00035-.29451-.1716-.56244-.44263-.68294L4.05753,2.93283c-.25619-.11532-.55623-.07699-.77581.0984-.21993.17643-.32282.46024-.26655.73611l1.27162,6.2407-1.2219,6.23034c-.04868.24687.03004.4996.20543.675.02037.02037.04247.03971.06491.058.22097.17401.51997.21061.77547.0946l14.09794-6.40816c.26862-.12222.44022-.38981.43987-.68432Zm-4.24251-.74634l-8.7416.02663-.88734-4.35295,9.62894,4.32632Zm-9.58888,5.8701l.85229-4.34432,8.76288-.02659-9.61517,4.37091Z" stroke-width="0"/></svg>`;
};
export default iconSend;

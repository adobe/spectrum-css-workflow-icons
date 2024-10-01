import { html } from 'lit';

export const iconHand = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m16.40039,5.12598c-.35693-.06079-.70532-.0188-1.02734.0896v-.87085c0-1.17188-.95312-2.125-2.125-2.125-.39099,0-.703.10889-.95361.28784-.37598-.59937-1.03796-1.00171-1.79639-1.00171-.96582,0-1.77368.65137-2.03125,1.53516-.22559-.08179-.46533-.13379-.71875-.13379-1.17188,0-2.125.95312-2.125,2.125v3.69629c-.32324-.41357-.77576-.69434-1.2959-.78613-.56152-.10156-1.125.02637-1.58789.35156-.46582.3252-.77539.8125-.87402,1.37109-.09863.55957.02637,1.12305.35156,1.58887l2.75,3.91602c1.8418,2.38086,3.5625,3.32324,6.0918,3.32324.05469,0,.10938,0,.16504-.00098,3.22461-.02832,5.51855-2.40527,6.13379-6.34668l.78027-4.56738c.19629-1.15527-.58301-2.25488-1.7373-2.45215Zm-.52344,6.77832c-.50098,3.21191-2.20215,5.06641-4.67188,5.08789-2.125.02344-3.46191-.68359-5.03027-2.71191l-2.72949-3.88672c-.0957-.13672-.13281-.30273-.10352-.46777.0293-.16406.12012-.30762.25684-.40332.28223-.19727.67285-.12988.87207.15527l1.28906,1.83008c.23926.33887.70703.42285,1.04492.18164.1875-.13184.28687-.33447.30603-.54614.0072-.00464.01233-.02075.01233-.06714v-6.04395c0-.34473.28027-.625.625-.625s.625.28027.625.625v3.75781c0,.41406.33594.75.75.75s.75-.33594.75-.75V3.63086c0-.34473.28027-.625.625-.625s.625.28027.625.625v5.03027c0,.41406.33594.75.75.75s.75-.33594.75-.75v-4.31641c0-.34473.28027-.625.625-.625s.625.28027.625.625v2.77246c0,.03027-.00086.19197-.00086.19197l-.28332,1.65861c-.06934.4082.20508.7959.61328.86523.40137.0752.79492-.2041.86523-.61328l.35938-2.10449c.05762-.33887.36914-.56836.72168-.51074.33887.05762.56836.38184.51074.72168l-.78223,4.57812Z"/></svg>`;
};
export default iconHand;
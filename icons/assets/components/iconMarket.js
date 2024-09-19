import { html } from 'lit';

export const iconMarket = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="M16.39062,9.81348c-.84277,0-1.60254-.36426-2.12988-.94336-.52734.5791-1.28711.94336-2.13086.94336-.84277,0-1.60254-.36426-2.12988-.94336-.52734.5791-1.28711.94336-2.12988.94336s-1.60254-.36426-2.12988-.94336c-.52734.5791-1.28711.94336-2.12988.94336-1.16992,0-2.22559-.68359-2.62695-1.70117-.56543-1.43066.07715-2.65332.10547-2.70508l1.44824-2.97363c.33301-.85059,1.19043-1.43359,2.16016-1.43359h10.60547c.97168,0,1.8291.58398,2.18457,1.4873l1.41016,2.94727c.26562.46387.57031,1.50781.12207,2.67383-.39258,1.01953-1.44922,1.70508-2.62891,1.70508ZM15.01074,6.93359c0,.76074.61914,1.37988,1.37988,1.37988.55469,0,1.06055-.30566,1.22852-.74414.30469-.79297-.02148-1.38574-.02441-1.3916-.01367-.02148-.02637-.04395-.03711-.06738l-1.44531-3.02539c-.14941-.37402-.45898-.58496-.80957-.58496H4.69727c-.35059,0-.66016.21094-.78906.53711l-1.48535,3.05371c-.02344.04688-.34766.70312-.04492,1.4707.17773.4502.67285.75195,1.23242.75195.76074,0,1.37988-.61914,1.37988-1.37988,0-.41406.33594-.75.75-.75s.75.33594.75.75c0,.76074.61914,1.37988,1.37988,1.37988s1.37988-.61914,1.37988-1.37988c0-.41406.33594-.75.75-.75s.75.33594.75.75c0,.76074.61914,1.37988,1.37988,1.37988.76172,0,1.38086-.61914,1.38086-1.37988,0-.41406.33594-.75.75-.75s.75.33594.75.75Z" stroke-width="0"/><path d="M16.75,10.75c-.41406,0-.75.33594-.75.75v1.5h-6.47852c-.00537,0-.00977.00293-.01538.00317l.00269-1.5022c.00098-.41406-.33496-.75-.74902-.75098h-.00098c-.41406,0-.74902.33496-.75.74902l-.00879,5c0,.00037.00024.00061.00024.00098h-3.25024c-.41309,0-.75-.33691-.75-.75v-4.25c0-.41406-.33594-.75-.75-.75s-.75.33594-.75.75v4.25c0,1.24023,1.00977,2.25,2.25,2.25h10.5c1.24023,0,2.25-1.00977,2.25-2.25v-4.25c0-.41406-.33594-.75-.75-.75ZM15.25,16.5h-5.75l.00342-2.00366c.00635.00024.01172.00366.01807.00366h6.47852v1.25c0,.41309-.33691.75-.75.75Z" stroke-width="0"/></svg>`;
};
export default iconMarket;

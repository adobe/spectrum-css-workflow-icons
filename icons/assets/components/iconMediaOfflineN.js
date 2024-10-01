import { html } from 'lit';

export const iconMediaOfflineN = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m18.58301,15.07324c-.11621,0-.23438-.02734-.3457-.08496-.36719-.19141-.50977-.64355-.31836-1.01172.21191-.40723.31934-.84766.31934-1.30859,0-1.49805-1.17773-2.7334-2.68164-2.81348-.25488-.01367-.48438-.15527-.61133-.37695-.12598-.22168-.13184-.49219-.01367-.71875.25879-.49805.39062-1.0127.39062-1.53027,0-1.84473-1.5-3.34473-3.34375-3.34473-.9834,0-1.90918.43359-2.54102,1.18848-.26562.31836-.73828.35938-1.05664.09375-.31738-.26562-.35938-.73828-.09375-1.05664.91797-1.09668,2.2627-1.72559,3.69141-1.72559,2.6709,0,4.84375,2.17285,4.84375,4.84473,0,.43848-.0625.87305-.18652,1.29883,1.80176.53027,3.10254,2.19043,3.10254,4.14062,0,.69531-.16895,1.38672-.48926,2.00195-.13379.25684-.39453.40332-.66602.40332Z"/><path d="m11.94922,17H3.71777c-1.90332,0-3.45215-1.54785-3.45215-3.45117,0-1.49219.9668-2.78027,2.32422-3.25-.04297-.23145-.06445-.46582-.06445-.70312,0-.69141.18555-1.37305.53613-1.96973.20898-.3584.66797-.47852,1.02637-.2666.35742.20996.47656.66895.2666,1.02637-.21484.36621-.3291.78516-.3291,1.20996,0,.33203.06934.65625.20605.96387.09961.22363.08301.4834-.04395.69238-.12695.20996-.34863.34473-.59375.36035-1.02539.06641-1.82812.91699-1.82812,1.93652,0,1.07617.87598,1.95117,1.95215,1.95117h8.23145c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/><path d="m18.25,19.02148c-.19238,0-.38379-.07324-.53027-.21973L1.21973,2.30176c-.29297-.29297-.29297-.76758,0-1.06055s.76758-.29297,1.06055,0l16.5,16.5c.29297.29297.29297.76758,0,1.06055-.14648.14648-.33789.21973-.53027.21973Z"/></svg>`;
};
export default iconMediaOfflineN;

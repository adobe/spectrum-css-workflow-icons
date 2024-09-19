import { html } from 'lit';

export const icon3DMaterial = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m10,18.75c-4.82471,0-8.75-3.9248-8.75-8.75S5.17529,1.25,10,1.25s8.75,3.9248,8.75,8.75-3.92529,8.75-8.75,8.75Zm0-16c-3.99756,0-7.25,3.25195-7.25,7.25s3.25244,7.25,7.25,7.25,7.25-3.25195,7.25-7.25-3.25244-7.25-7.25-7.25Z" stroke-width="0"/><path d="m5.66943,8.67578c-.10889,0-.21924-.02344-.32422-.07422-.37305-.17871-.53076-.62695-.35156-1,.6665-1.38867,1.89014-2.44629,3.35693-2.90137.39697-.12402.81592.09863.93848.49316.12256.39551-.09814.81641-.49414.93848-1.06982.33301-1.9624,1.10449-2.44873,2.11816-.12891.26953-.39746.42578-.67676.42578Z" stroke-width="0"/></svg>`;
};
export default icon3DMaterial;

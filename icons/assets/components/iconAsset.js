import { html } from 'lit';

export const iconAsset = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m11.66411,5.92114c0,.69588-.57855,1.26-1.29222,1.26-.71368,0-1.29222-.56412-1.29222-1.26,0-.69588.57855-1.26,1.29222-1.26s1.29222.56412,1.29222,1.26h0"/><path d="m12,15.13155v-2.90669c0-.42868.414-.69002.73316-.46282l2.35068,1.45334c.30029.21377.30029.71188,0,.92565l-2.35068,1.45334c-.31916.2272-.73316-.03415-.73316-.46282Z"/><path d="m16.75,8h-1.75v-3.99023c0-1.1084-.88672-2.00977-1.97754-2.00977H2.97754c-1.09082,0-1.97754.90137-1.97754,2.00977v7.98047c0,1.1084.88672,2.00977,1.97754,2.00977h5.02246v2.75c0,1.24023,1.00977,2.25,2.25,2.25h6.5c1.24023,0,2.25-1.00977,2.25-2.25v-6.5c0-1.24023-1.00977-2.25-2.25-2.25Zm-8.75,4.5H2.97754c-.26367,0-.47754-.22852-.47754-.50977v-.77295l2.59473-2.53076c.16602-.16211.44531-.16113.61133-.00098l2.29395,2.23706v1.57739Zm.3103-3.36987l-1.55737-1.5188c-.74219-.72559-1.95605-.72656-2.7041,0l-1.54883,1.51074v-5.1123c0-.28125.21387-.50977.47754-.50977h10.04492c.26367,0,.47754.22852.47754.50977v3.99023h-3.25c-.83081,0-1.54993.45825-1.9397,1.13013Zm9.1897,7.61987c0,.41309-.33691.75-.75.75h-6.5c-.41309,0-.75-.33691-.75-.75v-6.5c0-.41309.33691-.75.75-.75h6.5c.41309,0,.75.33691.75.75v6.5Z"/></svg>`;
};
export default iconAsset;

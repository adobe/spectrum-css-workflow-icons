import { html } from 'lit';

export const iconChat = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="M16.75,2h-8c-1.24264,0-2.25,1.00736-2.25,2.25v.5c0,.41406.33594.75.75.75s.75-.33594.75-.75v-.5c0-.41309.33691-.75.75-.75h8c.4125,0,.75.3375.75.75v4.5c0,.4125-.3375.75-.75.75h-.75c-.41421,0-.75.33579-.75.75v1.65137l-1.75-1.54199v-1.10938c0-1.24264-1.00736-2.25-2.25-2.25H3.25c-1.24264,0-2.25,1.00736-2.25,2.25v4.5c0,1.24023,1.00977,2.25,2.25,2.25v2.13672c0,.38281.22754.72363.58008.86914.11914.04883.24414.07227.36523.07227.23828,0,.46582-.08887.61816-.24512l3.21973-2.83301h3.2168c1.24264,0,2.25-1.00736,2.25-2.25v-1.39282l1.63965,1.4436c.18066.18066.41992.27539.66504.27539.12207,0,.24609-.02344.36426-.07227.35254-.14648.58105-.48633.58105-.86719v-2.13672c1.24023,0,2.25-1.00977,2.25-2.25v-4.5c0-1.24264-1.00736-2.25-2.25-2.25ZM12,13.75c0,.4125-.3375.75-.75.75h-3.7832l-2.7168,2.39355v-1.64355c0-.41421-.33579-.75-.75-.75h-.75c-.4125,0-.75-.3375-.75-.75v-4.5c0-.4125.3375-.75.75-.75h8c.4125,0,.75.3375.75.75v4.5Z"/></svg>`;
};
export default iconChat;

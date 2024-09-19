import { html } from 'lit';

export const iconStarFilled = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="M11.49541,2.41401l1.20352,3.18317c.21146.55928.73487.93956,1.33211.96784l3.39952.16098c1.49264.07068,2.10363,1.95114.9376,2.88567l-2.6558,2.12853c-.46708.37435-.66689.99056-.50834,1.56776l.8957,3.26096c.3964,1.44316-1.20676,2.60738-2.45643,1.78386l-2.81918-1.85781c-.49979-.32936-1.14755-.33006-1.64806-.00178l-2.86668,1.88025c-1.24918.81934-2.84794-.34282-2.45403-1.78386l.89758-3.2836c.15766-.57675-.04227-1.19206-.50883-1.56599l-2.65557-2.12834c-1.16603-.93453-.55503-2.81498.9376-2.88567l3.39945-.16098c.59724-.02828,1.12065-.40856,1.33211-.96782l1.20357-3.1832c.52848-1.39773,2.50569-1.39772,3.03416.00001Z"/></svg>`;
};
export default iconStarFilled;

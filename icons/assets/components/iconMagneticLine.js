import { html } from 'lit';

export const iconMagneticLine = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m18.7832,4.21973l-2.25-2.25c-.29297-.29297-.76758-.29297-1.06055,0s-.29297.76758,0,1.06055l.95087.95093c-2.12494-.06018-5.18481.02454-6.16425,6.15063-.34882,2.18188-.71729,3.65027-2.91516,4.17566-.40692-1.33069-1.63208-2.3075-3.09412-2.3075-1.79199,0-3.25,1.45801-3.25,3.25s1.45801,3.25,3.25,3.25c1.59808,0,2.92303-1.16174,3.19269-2.68359,3.24493-.66699,3.88531-2.86816,4.29803-5.44824.78662-4.9165,2.68469-4.95288,4.71869-4.88525l-.98676.98682c-.29297.29297-.29297.76758,0,1.06055.14648.14648.33838.21973.53027.21973s.38379-.07324.53027-.21973l2.25-2.25c.29297-.29297.29297-.76758,0-1.06055ZM5.82489,15.99927c-.28186.58936-.87915,1.00073-1.57489,1.00073-.96484,0-1.75-.78516-1.75-1.75s.78516-1.75,1.75-1.75c.69543,0,1.29242.41089,1.57446,1,.10925.22827.17554.48059.17554.75,0,.26904-.0661.52124-.17511.74927Z"/></svg>`;
};
export default iconMagneticLine;

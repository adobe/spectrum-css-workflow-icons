import { html } from 'lit';

export const iconPinOn = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="M15.78711,11.4043l-1.78711-1.50293v-4.47754c.44531-.35352.71484-.89941.71484-1.49805,0-1.06152-.86328-1.92578-1.92383-1.92578h-5.58105c-1.06055,0-1.92285.86426-1.92285,1.92578,0,.59863.26855,1.14453.71289,1.49707v4.47852l-1.77539,1.49414c-.58203.47266-.79688,1.23438-.54688,1.94043.25.70703.89746,1.16406,1.64941,1.16406h3.92285v2.75c0,.41406.33594.75.75.75s.75-.33594.75-.75v-2.75h3.92383c.75195,0,1.39941-.45703,1.64941-1.16406.25-.70605.03516-1.46777-.53613-1.93164ZM14.90918,12.83496c-.02637.0752-.08887.16504-.23535.16504H5.32715c-.14648,0-.20898-.08984-.23535-.16504s-.03516-.18262.08887-.2832l2.05273-1.72852c.16895-.1416.2666-.35156.2666-.57324v-5.25c0-.30664-.1875-.58301-.47266-.69629-.1543-.0625-.24023-.19629-.24023-.37793,0-.23438.18945-.42578.42285-.42578h5.58105c.2334,0,.42383.19141.42383.42578,0,.18066-.08594.31543-.24219.37793-.28516.11328-.47266.38965-.47266.69629v5.25c0,.22168.09766.43164.2666.57422l2.06445,1.7373c.11328.09082.10449.19824.07812.27344Z"/></svg>`;
};
export default iconPinOn;

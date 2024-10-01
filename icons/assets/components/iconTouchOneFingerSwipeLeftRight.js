import { html } from 'lit';

export const iconTouchOneFingerSwipeLeftRight = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="M5.86065,3.76873h-2.526l1.05432-1.05371c.24414-.24414.24512-.63965.00098-.88379s-.63965-.24512-.88379-.00098L1.38409,3.95135c-.11816.11719-.18359.27637-.18359.44238s.06543.3252.18359.44238l2.12207,2.12109c.12207.12207.28125.18262.44141.18262s.32031-.06152.44238-.18359c.24414-.24414.24316-.63965-.00098-.88379l-1.05432-1.05371h2.526c.34473,0,.625-.28027.625-.625s-.28027-.625-.625-.625Z" stroke-width="0"/><path d="M18.44238,3.95135l-2.12109-2.12109c-.24414-.24414-.64062-.24414-.88477,0-.24316.24414-.24316.64062,0,.88477l1.0542,1.05371h-2.52588c-.34473,0-.625.28027-.625.625s.28027.625.625.625h2.52588l-1.0542,1.05371c-.24316.24414-.24316.64062,0,.88477.12207.12207.28223.18262.44238.18262s.32031-.06055.44238-.18262l2.12109-2.12109c.24316-.24414.24316-.64062,0-.88477Z" stroke-width="0"/><path d="M12.14453,19.06055h-.07812c-2.87988-.03418-4.75781-2.32031-6.12988-3.98926l-.24121-.29297c-.39746-.48047-.72852-.86523-1.00195-1.18359-.90723-1.05469-1.32129-1.53613-1.32031-2.33398.00293-1.01855.91016-1.91016,1.94043-1.91016.79492.00195,1.23828.36328,2.68262,1.7998v-7.02637c0-1.05664.85938-1.91602,1.91602-1.91602,1.05566,0,1.91504.85938,1.91504,1.91602v4.5498c.59277.01172,1.24609.04395,1.7373.14844,2.4834.59863,3.81934,2.24219,3.5957,4.40039-.15039,1.44824-.60547,5.83789-5.01562,5.83789ZM5.3125,10.85059c-.20801,0-.43848.21582-.43945.41309,0,.22852.22949.50684.95801,1.35352.27734.32324.61523.71484,1.01953,1.2041l.24512.29688c1.25098,1.52246,2.80664,3.41602,4.98828,3.44238,2.16699.01855,3.25488-1.31738,3.58398-4.49219.19336-1.86426-1.44238-2.54395-2.43457-2.7832-.49902-.10547-1.41406-.11426-2.01953-.12012l-.14453-.00098c-.41113-.00391-.74219-.33887-.74219-.75v-5.29004c0-.22949-.18652-.41602-.41504-.41602-.22949,0-.41602.18652-.41602.41602v8.83398c0,.30273-.18262.57617-.46191.69238-.2793.11719-.60254.05176-.81738-.16113l-.74219-.74023c-1.30273-1.30273-1.89746-1.89746-2.16211-1.89844Z" stroke-width="0"/></svg>`;
};
export default iconTouchOneFingerSwipeLeftRight;

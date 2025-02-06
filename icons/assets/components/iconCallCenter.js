import { html } from 'lit';

export const iconCallCenter = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="M16.95117,6.24902h-1.28644c-.39783-2.84949-2.78638-5.04883-5.67303-5.04883-.0033,0-.00598.00183-.00928.00195-.0033-.00012-.00598-.00195-.00928-.00195-2.88617,0-5.27441,2.19861-5.67285,5.04883h-1.25146c-1.12988,0-2.04883.91895-2.04883,2.04883v3.64551c0,1.12012.91113,2.04004,2.03369,2.04883l1.71045.00781h.00342c.04474,0,.08356-.01794.12616-.02539.0426.00745.08148.02539.12628.02539h.00195c.41406-.00098.74902-.33789.74805-.75195l-.01465-6.16309c0-2.41797,1.90088-4.38477,4.23779-4.38477.0033,0,.00598-.00183.00928-.00195.0033.00012.00598.00195.00928.00195,2.33691,0,4.23779,1.9668,4.23779,4.38477v6.66504c0,.00317.00171.00562.00177.00879-.22198.91895-.95435,1.72046-2.01117,2.21924-.33734-.58301-.94666-.97803-1.64832-.97803h-1.14355c-1.06299,0-1.92822.89746-1.92822,2s.86523,2,1.92822,2h1.14355c.89105,0,1.63593-.63379,1.8559-1.48718,1.72595-.67163,2.94934-1.9552,3.28424-3.48352.00232-.01074-.00134-.02075.00055-.03137l1.25677-.00574c1.11963-.00879,2.03076-.92871,2.03076-2.04883v-3.64551c0-1.12988-.91895-2.04883-2.04883-2.04883ZM2.5,11.94336v-3.64551c0-.30273.24609-.54883.54883-.54883h1.18829l.01086,4.74866-1.20453-.00549c-.2998-.00195-.54346-.24902-.54346-.54883ZM10.57178,17.5h-1.14355c-.23633,0-.42822-.22461-.42822-.5s.19189-.5.42822-.5h1.14355c.23633,0,.42822.22461.42822.5s-.19189.5-.42822.5ZM17.5,11.94336c0,.2998-.24365.54688-.54053.54883l-1.22998.00562v-4.74878h1.22168c.30273,0,.54883.24609.54883.54883v3.64551Z"/></svg>`;
};
export default iconCallCenter;

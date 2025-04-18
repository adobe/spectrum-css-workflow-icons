import { html } from 'lit';

export const iconSaveFloppy = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="M17.41406,4.10352l-1.51758-1.51758c-.37793-.37793-.87988-.58594-1.41406-.58594H4.25c-1.24072,0-2.25,1.00977-2.25,2.25v11.5c0,1.24023,1.00928,2.25,2.25,2.25h11.5c1.24072,0,2.25-1.00977,2.25-2.25V5.51758c0-.52637-.21338-1.04199-.58594-1.41406ZM7.75,3.5h4.5v3h-4.5v-3ZM13.25,16.5h-6.5v-4.5h6.5v4.5ZM16.5,15.75c0,.41309-.33643.75-.75.75h-1v-4.5c0-.82715-.67285-1.5-1.5-1.5h-6.5c-.82715,0-1.5.67285-1.5,1.5v4.5h-1c-.41357,0-.75-.33691-.75-.75V4.25c0-.41309.33643-.75.75-.75h2v3c0,.82715.67285,1.5,1.5,1.5h4.5c.82715,0,1.5-.67285,1.5-1.5v-3h.73242c.1333,0,.25879.05176.35352.14648l1.51758,1.51758c.09326.09277.14648.22168.14648.35352v10.23242Z"/></svg>`;
};
export default iconSaveFloppy;

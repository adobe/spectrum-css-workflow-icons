import { html } from 'lit';

export const iconFeedback = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="M6.25,19c-.09961,0-.19922-.01953-.29395-.05957-.27637-.11816-.45605-.38965-.45605-.69043v-3.25h-.75c-2.06738,0-3.75-1.68262-3.75-3.75v-5.5c0-2.06738,1.68262-3.75,3.75-3.75h10.5c2.06738,0,3.75,1.68262,3.75,3.75v5.5c0,2.06738-1.68262,3.75-3.75,3.75h-4.54297l-3.93652,3.79004c-.14258.1377-.33008.20996-.52051.20996ZM4.75,3.5c-1.24023,0-2.25,1.00977-2.25,2.25v5.5c0,1.24023,1.00977,2.25,2.25,2.25h1.5c.41406,0,.75.33594.75.75v2.23633l2.88379-2.77637c.13965-.13477.32617-.20996.52051-.20996h4.8457c1.24023,0,2.25-1.00977,2.25-2.25v-5.5c0-1.24023-1.00977-2.25-2.25-2.25H4.75Z"/><circle cx="5.5" cy="8.5" r="1.5"/><circle cx="10" cy="8.5" r="1.5"/><circle cx="14.5" cy="8.5" r="1.5"/></svg>`;
};
export default iconFeedback;

import React from 'react';
                    
export default function iconMenuHamburger({scale = 'M', color = 'LIGHT', ...props}) {
    return (
      <svg id="iconMenuHamburger" width="20" height="20" viewBox="0 0 20 20" {...props}><path d="m16.25,14H3.75c-.41406,0-.75.33594-.75.75s.33594.75.75.75h12.5c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75Z"/><path d="m3.75,5.5h12.5c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75H3.75c-.41406,0-.75.33594-.75.75s.33594.75.75.75Z"/><path d="m16.25,9H3.75c-.41406,0-.75.33594-.75.75s.33594.75.75.75h12.5c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75Z"/></svg>
    );
}

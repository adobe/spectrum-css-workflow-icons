import React from 'react';
                    
export default function iconAdd({scale = 'M', color = 'LIGHT', ...props}) {
    return (
      <svg id="iconAdd" width="20" height="20" viewBox="0 0 20 20" {...props}><path d="m16.25,9.25h-5.5V3.75c0-.41406-.33594-.75-.75-.75s-.75.33594-.75.75v5.5H3.75c-.41406,0-.75.33594-.75.75s.33594.75.75.75h5.5v5.5c0,.41406.33594.75.75.75s.75-.33594.75-.75v-5.5h5.5c.41406,0,.75-.33594.75-.75s-.33594-.75-.75-.75Z"/></svg>
    );
}

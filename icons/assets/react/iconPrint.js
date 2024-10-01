import React from 'react';
                    
export default function iconPrint({scale = 'M', color = 'LIGHT', ...props}) {
    return (
      <svg id="iconPrint" width="20" height="20" viewBox="0 0 20 20" {...props}><path d="m16.75,5h-.75v-.75c0-1.24023-1.00977-2.25-2.25-2.25h-7.5c-1.24023,0-2.25,1.00977-2.25,2.25v.75h-.75c-1.24023,0-2.25,1.00977-2.25,2.25v5.5c0,1.24023,1.00977,2.25,2.25,2.25h.75v.75c0,1.24023,1.00977,2.25,2.25,2.25h7.5c1.24023,0,2.25-1.00977,2.25-2.25v-.75h.75c1.24023,0,2.25-1.00977,2.25-2.25v-5.5c0-1.24023-1.00977-2.25-2.25-2.25Zm-11.25-.75c0-.41309.33691-.75.75-.75h7.5c.41309,0,.75.33691.75.75v.75H5.5v-.75Zm9,11.5c0,.41309-.33691.75-.75.75h-7.5c-.41309,0-.75-.33691-.75-.75v-3.5c0-.41309.33691-.75.75-.75h7.5c.41309,0,.75.33691.75.75v3.5Zm3-3c0,.41309-.33691.75-.75.75h-.75v-1.25c0-1.24023-1.00977-2.25-2.25-2.25h-7.5c-1.24023,0-2.25,1.00977-2.25,2.25v1.25h-.75c-.41309,0-.75-.33691-.75-.75v-5.5c0-.41309.33691-.75.75-.75h13.5c.41309,0,.75.33691.75.75v5.5Z"/><path d="m12.5,15h-5c-.41406,0-.75-.33594-.75-.75s.33594-.75.75-.75h5c.41406,0,.75.33594.75.75s-.33594.75-.75.75Z"/></svg>
    );
}
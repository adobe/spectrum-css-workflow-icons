import React from 'react';
                    
export default function iconViewTransparency({scale = 'M', color = 'LIGHT', ...props}) {
    return (
      <svg id="iconViewTransparency" width="20" height="20" viewBox="0 0 20 20" {...props}><path d="M15.75,18H4.25c-1.24072,0-2.25-1.00977-2.25-2.25V4.25c0-1.24023,1.00928-2.25,2.25-2.25h11.5c1.24072,0,2.25,1.00977,2.25,2.25v11.5c0,1.24023-1.00928,2.25-2.25,2.25ZM4.25,3.5c-.41357,0-.75.33691-.75.75v11.5c0,.41309.33643.75.75.75h11.5c.41357,0,.75-.33691.75-.75V4.25c0-.41309-.33643-.75-.75-.75H4.25Z"/><rect x="4" y="4" width="3" height="3" opacity=".5"/><rect x="10" y="4" width="3" height="3" opacity=".5"/><rect x="7" y="7" width="3" height="3" opacity=".5"/><rect x="13" y="7" width="3" height="3" opacity=".5"/><rect x="4" y="10" width="3" height="3" opacity=".5"/><rect x="10" y="10" width="3" height="3" opacity=".5"/><rect x="7" y="13" width="3" height="3" opacity=".5"/><rect x="13" y="13" width="3" height="3" opacity=".5"/></svg>
    );
}

import React from 'react';
                    
export default function iconMask({scale = 'M', color = 'LIGHT', ...props}) {
    return (
      <svg id="iconMask" width="20" height="20" viewBox="0 0 20 20" {...props}><path d="m16.75,17H3.25c-1.24072,0-2.25-1.00977-2.25-2.25V5.25c0-1.24023,1.00928-2.25,2.25-2.25h13.5c1.24072,0,2.25,1.00977,2.25,2.25v9.5c0,1.24023-1.00928,2.25-2.25,2.25ZM3.25,4.5c-.41357,0-.75.33691-.75.75v9.5c0,.41309.33643.75.75.75h13.5c.41357,0,.75-.33691.75-.75V5.25c0-.41309-.33643-.75-.75-.75H3.25Z"/><path d="m10,14.75c-2.61914,0-4.75-2.13086-4.75-4.75s2.13086-4.75,4.75-4.75,4.75,2.13086,4.75,4.75-2.13086,4.75-4.75,4.75Zm0-8c-1.79199,0-3.25,1.45801-3.25,3.25s1.45801,3.25,3.25,3.25,3.25-1.45801,3.25-3.25-1.45801-3.25-3.25-3.25Z"/><path d="m16.75,4.5H3.25c-.41357,0-.75.33691-.75.75v9.5c0,.41309.33643.75.75.75h13.5c.41357,0,.75-.33691.75-.75V5.25c0-.41309-.33643-.75-.75-.75Zm-6.75,10.25c-2.61914,0-4.75-2.13086-4.75-4.75s2.13086-4.75,4.75-4.75,4.75,2.13086,4.75,4.75-2.13086,4.75-4.75,4.75Z" opacity=".2"/></svg>
    );
}

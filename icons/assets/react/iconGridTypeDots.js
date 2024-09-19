import React from 'react';
                    
export default function iconGridTypeDots({scale = 'M', color = 'LIGHT', ...props}) {
    return (
      <svg id="iconGridTypeDots" width="20" height="20" viewBox="0 0 20 20" {...props}><path d="M15.75,18H4.25c-1.24072,0-2.25-1.00977-2.25-2.25V4.25c0-1.24023,1.00928-2.25,2.25-2.25h11.5c1.24072,0,2.25,1.00977,2.25,2.25v11.5c0,1.24023-1.00928,2.25-2.25,2.25ZM4.25,3.5c-.41357,0-.75.33691-.75.75v11.5c0,.41309.33643.75.75.75h11.5c.41357,0,.75-.33691.75-.75V4.25c0-.41309-.33643-.75-.75-.75H4.25Z"/><circle cx="6" cy="6" r=".75"/><circle cx="10" cy="6" r=".75"/><circle cx="14" cy="6" r=".75"/><circle cx="6" cy="10" r=".75"/><circle cx="10" cy="10" r=".75"/><circle cx="14" cy="10" r=".75"/><circle cx="6" cy="14" r=".75"/><circle cx="10" cy="14" r=".75"/><circle cx="14" cy="14" r=".75"/></svg>
    );
}

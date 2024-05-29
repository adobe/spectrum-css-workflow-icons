import React from 'react';
                    
export default function iconMore({scale = 'M', color = 'LIGHT', ...props}) {
    return (
      <svg id="iconMore" width="20" height="20" viewBox="0 0 20 20" {...props}><circle cx="10" cy="10.02114" r="1.5"/><path d="m10,8.5c-.82843,0-1.5.67157-1.5,1.5s.67157,1.5,1.5,1.5,1.5-.67157,1.5-1.5-.67157-1.5-1.5-1.5Z"/><circle cx="4" cy="10.02114" r="1.5"/><circle cx="4" cy="10" r="1.5"/><circle cx="16" cy="10.02114" r="1.5"/><circle cx="16" cy="10" r="1.5"/></svg>
    );
}

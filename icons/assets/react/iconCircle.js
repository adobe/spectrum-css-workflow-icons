import React from 'react';
                    
export default function iconCircle({scale = 'M', color = 'LIGHT', ...props}) {
    return (
      <svg id="iconCircle" width="20" height="20" viewBox="0 0 20 20" {...props}><path d="m10,18.75c-4.82471,0-8.75-3.9248-8.75-8.75S5.17529,1.25,10,1.25s8.75,3.9248,8.75,8.75-3.92529,8.75-8.75,8.75Zm0-16c-3.99756,0-7.25,3.25195-7.25,7.25s3.25244,7.25,7.25,7.25,7.25-3.25195,7.25-7.25-3.25244-7.25-7.25-7.25Z" stroke-width="0"/></svg>
    );
}

import React from 'react';
                    
export default function iconChartTrend({scale = 'M', color = 'LIGHT', ...props}) {
    return (
      <svg id="iconChartTrend" width="20" height="20" viewBox="0 0 20 20" {...props}><path d="M2.99951,17.75c-.15479,0-.31104-.04785-.44482-.14648-.3335-.24609-.4043-.71582-.1582-1.04883l2.29736-3.11328c.23828-.32227.68945-.40234,1.02246-.17676l2.04883,1.37891,1.62207-6.98438c.06934-.29883.31348-.52441.6167-.57129.3042-.04883.604.09668.75977.36035l1.93213,3.27637,3.62061-8.0332c.16992-.37793.61377-.54492.9917-.375.37744.16992.5459.61426.37549.99219l-4.21484,9.35254c-.11475.25488-.36279.4248-.64258.44043-.27637.0293-.54492-.12695-.68701-.36816l-1.71484-2.9082-1.44434,6.21875c-.05566.24023-.22607.4375-.45557.52832-.22949.08887-.48877.0625-.69385-.07617l-2.35596-1.58594-1.87109,2.53516c-.14697.19922-.37402.30469-.604.30469Z" stroke-width="0"/></svg>
    );
}

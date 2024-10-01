import React from 'react';
                    
export default function iconPath({scale = 'M', color = 'LIGHT', ...props}) {
    return (
      <svg id="iconPath" width="20" height="20" viewBox="0 0 20 20" {...props}><path d="M16,3.375c-.58252,0-1.11597.19702-1.55188.51953-1.33972-.82568-2.75476-1.36182-4.14246-1.5127-1.32568-.14453-2.5675.07227-3.67847.57471-.44873-.35815-1.00977-.58154-1.6272-.58154-1.44727,0-2.625,1.17773-2.625,2.625,0,.65479.24951,1.24683.64746,1.70703-1.07849,2.46606-.79028,5.34497.80237,7.82544-.28381.41919-.44983.92432-.44983,1.46753,0,1.44727,1.17773,2.625,2.625,2.625s2.625-1.17773,2.625-2.625-1.17773-2.625-2.625-2.625c-.35938,0-.70178.07324-1.01404.20459-1.21472-1.95508-1.46204-4.14331-.69299-6.06372.22632.06396.46045.10913.70703.10913,1.44727,0,2.625-1.17773,2.625-2.625,0-.27954-.05566-.54395-.13696-.79688.80359-.3125,1.69189-.43457,2.65454-.33105,1.12866.12378,2.28833.55908,3.40186,1.22705-.104.28223-.16943.58301-.16943.90088,0,1.44727,1.17773,2.625,2.625,2.625s2.625-1.17773,2.625-2.625-1.17773-2.625-2.625-2.625ZM7.375,16c0,.75781-.61719,1.375-1.375,1.375s-1.375-.61719-1.375-1.375.61719-1.375,1.375-1.375,1.375.61719,1.375,1.375ZM5,6.375c-.75781,0-1.375-.61719-1.375-1.375s.61719-1.375,1.375-1.375,1.375.61719,1.375,1.375-.61719,1.375-1.375,1.375ZM16,7.375c-.75781,0-1.375-.61719-1.375-1.375s.61719-1.375,1.375-1.375,1.375.61719,1.375,1.375-.61719,1.375-1.375,1.375Z"/></svg>
    );
}
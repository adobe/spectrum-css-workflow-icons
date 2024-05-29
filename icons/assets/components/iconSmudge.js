import { html } from 'lit';

export const iconSmudge = ({ width = 20, height = 20, ariaHidden = true, title = '', id = '-icon', focusable = false } = {}) => {
  return html`<svg id=${id} width=${width} height=${height} aria-hidden=${ariaHidden ? "true":"false"} role="img" fill="currentColor" aria-label=${title} focusable=${focusable ? "true":"false"} viewBox="0 0 20 20"><path d="m4.34033,18.61426c-.74756.00098-1.41699-.36816-1.80615-.98926-.01953-.03125-.03662-.06445-.05127-.09766-.21875-.51367-.22412-1.04883-.02734-1.53809.19678-.48828.57227-.87109,1.05615-1.07715.04297-.01855.08691-.0332.13232-.04297.61963-.13672,1.19092-.47656,1.6084-.95605l1.33398-1.77148c-.90625-.42969-1.48242-1.3877-1.39746-2.4082.01123-.1377-.05762-.2373-.31738-.5332-.36719-.41797-.98145-1.11816-.5791-2.29199.01221-.03516.02686-.06934.04395-.10254.12402-.23926.2168-.49316.27637-.75684-.01465-.13477-.03516-.21191-.0542-.28906-.04443-.17969-.08496-.36133-.09766-.54492-.01318-.71289.26611-1.35938.76562-1.81348.4043-.3623.85938-.65137,1.35596-.8623,1.07812-.51758,2.24805-.94629,3.44629-1.25977,1.00439-.32129,2.12891-.40332,3.21045-.22363.40869.06738.68555.4541.61768.8623-.06738.4082-.45947.68555-.86182.61816-.84912-.1416-1.73145-.0791-2.54932.18359-1.14355.2998-2.22266.69531-3.24609,1.18555-.37598.16113-.69092.36133-.96826.60938-.17578.16016-.27686.39258-.27246.63574.00488.05859.03271.1543.05615.25098.0332.13477.06494.27051.0835.40625.01611.1123.02148.22949.01562.3457-.00195.03711-.00635.07324-.01367.10938-.08154.41016-.21729.80566-.4043,1.17773-.09326.30273-.01172.41211.30273.77051.31592.35938.74854.85254.68506,1.64453-.03857.46191.271.8877.71924.99414.29492.05762.66211.12988.88086.49316.14697.24414.1709.53516.07129.86719-.02588.08398-.06592.16406-.11963.23438l-1.81885,2.41211c-.63916.7373-1.46484,1.23926-2.3623,1.45703-.09375.05273-.16699.13477-.20752.23633-.04736.11719-.0459.24414.00342.36035.07812.11523.30078.21973.52783.20508,1.21045-.1582,2.32861-.84473,3.03613-1.87988.13525-.16699,2.24072-2.65137,3.86621-4.26465.26855-.24707.58838-.37988.92334-.39355.37012-.04688.72949.125.99463.37988.26562.25391.41602.5957.42383.96289-.0332.53223-.82373,3.37109-.83154,3.39844-.06592.26172.10547.55371.38867.62891.2915.08691.58057-.06738.66113-.33984.3418-1.08301,1.20898-3.87598,1.95801-6.64941.1084-.40039.51904-.64258.91943-.52832.3999.10742.63672.51953.52881.91895-.75195,2.78516-1.62939,5.6123-1.97168,6.69824-.31543,1.05273-1.43994,1.65918-2.50244,1.34375-1.05176-.27832-1.70312-1.38574-1.43018-2.46289.16455-.57617.51758-1.9043.68896-2.61035-1.48633,1.53711-3.40527,3.80176-3.42529,3.8252-.90137,1.32617-2.40088,2.24707-4.06689,2.46387-.06689.00586-.1333.00781-.19922.00781Z"/></svg>`;
};
export default iconSmudge;

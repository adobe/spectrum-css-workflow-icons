// Shared scenario configuration
const { readdirSync } = require('fs');
const { basename } = require('path');

const ext = 'rsp';

const selectors = readdirSync('./vrt-react/src/react-spectrum-workflow/dist').filter(item => !['index.js', 'util.js'].includes(item)).map(item => `.A4u${basename(item, '.js')}`);
selectors.push('.icon-total-num-row');

const [...rest] = process.argv.slice(3);

let host = 'localhost';
rest.forEach(argv => {
  if (argv === '--moby') {
    host = 'host.docker.internal';
  }
});

module.exports = {
  id: 'rsp-icon-package',
  viewports: [
    {
      label: 'desktop',
      width: 800,
      height: 600
    }
  ],
  scenarios: [
    {
      label: 'icons',
      url: `http://${host}:3000`,
      selectors,
      selectorExpansion: true,
      expect: 0,
      delay: 1000,
      misMatchThreshold: 0.1,
      requireSameDimensions: true
    }
  ],
  paths: {
    bitmaps_reference: `bitmap_references/${ext}`,
    bitmaps_test: `bitmap_tests/${ext}`,
    html_report: `reports/html_report_${ext}`,
    ci_report: `reports/ci_report_${ext}`
  },
  report: ['browser'],
  engine: 'playwright',
  engineOptions: {
    browser: 'chromium'
  },
  asyncCaptureLimit: 2,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
  imageMagick: false,
  staticDiverged: false,
  resembleOutputOptions: {
    errorType: "movement"
  },
  fileNameTemplate: '{selectorLabel}',
  dockerCommandTemplate: 'docker run --rm -it --mount type=bind,source="{cwd}",target=/src --network host docker-adobe-spectrum-release.dr.corp.adobe.com/backstopjs-spectrum-playwright:{version} {backstopCommand} {args}'
};

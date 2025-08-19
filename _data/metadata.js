const manifest = require('../icons/manifest.json') ?? {};

module.exports = {
    title: 'Adobe Spectrum Workflow Icons',
    url: 'https://spectrum-workflow-icons.netlify.app',
    description: 'This is a collection of open-source workflow icons for Adobe\'s Spectrum Design System. Spectrum uses Workflow and UI icons that are designed to be clear, minimal, and consistent across all platforms. Review the <a href="https://spectrum.adobe.com/page/iconography">Iconography guidelines</a> to understand how to use our icons.',
    language: 'en-US',
    icons: manifest.svg ?? [],
    webcomponents: manifest.components ?? [],
    spritesheet: 'assets/svg-spriteSheet/icons.svg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
};

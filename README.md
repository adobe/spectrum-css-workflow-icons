<div align="right">

[![Netlify](https://api.netlify.com/api/v1/badges/22568c1e-135b-4cc4-a682-387cbad68a5d/deploy-status)](https://app.netlify.com/sites/spectrum-workflow-icons/deploys)

![GitHub Actions build status on main](https://img.shields.io/github/actions/workflow/status/adobe/spectrum-css-workflow-icons/build.yml?branch=main&style=for-the-badge&label=main)

</div>

<h1 align="center">Spectrum Workflow Icons</h1>

Build and publish spectrum-css workflow svg icons and svg sprite sheet for [Spectrum CSS](https://github.com/adobe/spectrum-css).

## Setup

```sh
yarn install
```

### To build and preview the icons

Run `yarn build` will generate the ready to publish package in `dist/`.

Run `yarn serve` to see the mini-site for all the workflow icons.

### Updating the icons

Icons are available from an internal repository that is available only to Adobe employees. If you are an employee with access, follow the steps below:

1. `npm login --scope a4u` to authenticate with the internal repository
2. `yarn add -D @a4u/a4u-s2-icon-global-set-open-source-processed` to install the latest version of the internal repository
3. **Do not commit** the updated `package.json` with the new version of `@a4u/a4u-s2-icon-global-set-open-source-processed` as this blocks non-Adobe employees from installing and using the repository.

Once your environment is ready, you can run `yarn build` to rebuild the `icons/` folder. Expect to see changes to the committed content in the `icons/` folder.

To preview your updates, run `yarn serve`.

### CSS Custom Properties

Icons include [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) as fill attributes.

Example:

```html
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
  <path d="m16.87598,4.84082h-.00098l-5.74902-3.31934c-.69629-.40234-1.55859-.40137-2.25098,0l-5.75098,3.31934c-.69336.40137-1.12402,1.14844-1.12402,1.94922v6.63965c0,.80176.43164,1.54785,1.125,1.94824l5.74902,3.32031c.34766.20117.7373.30078,1.12598.30078.38965,0,.77832-.09961,1.125-.30078l5.75-3.32031c.69336-.40039,1.125-1.14648,1.125-1.94824v-6.63965c0-.80078-.43066-1.54785-1.12402-1.94922Zm-7.25-2.02051c.11523-.06738.24414-.10059.37402-.10059.12891,0,.25879.0332.375.10059l5.28516,3.05151-5.65942,3.12231-5.66431-3.12085,5.28955-3.05298ZM3.875,14.0791c-.23145-.13379-.375-.38281-.375-.64941v-6.30371l5.75,3.16797v6.88892l-5.375-3.10376Zm12.25,0l-5.375,3.10327v-6.8894l5.75-3.17236v6.30908c0,.2666-.14355.51562-.375.64941Z" fill="var(--iconPrimary, #222)"/>
</svg>
```

Here is the list of properties available:

| Property name | Fallback value | Additional context |
| --- | --- | --- |
| `--iconPrimary` | `currentColor` | Most workflow icons |
| `--iconRedPrimary` | #d31510 | Used in: `CloudStateErrorRed_22x20.svg` |
| `--iconFill` | #464646 | Express only |
| `--iconFillMedium` | #909090 | Express only |

## Tasks

The following tasks are available:

| Command | Description | Examples |
| --- | --- | --- |
| `clean` | Cleans all output files in the dist directory | `yarn clean` |
| `build` | Deletes and rebuilds the icon folder, can only be run by an Adobe employee with access | `yarn build` |
| `site` | Cleans the dist directory, copies website assets and prepares the dist output for the site preview | `yarn site` |
| `serve` | Builds the site and opens a localhost of the preview website to view the workflow icons | `yarn serve` |

### Contributing

A very special thank you to all of our [contributors](https://github.com/adobe/spectrum-css/graphs/contributors) without whom this project would not be possible.

Want to join the team? Check out the [contributing guidelines](.github/CONTRIBUTING.md) to get started.

### Licensing

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.

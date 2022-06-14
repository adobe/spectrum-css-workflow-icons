# Spectrum-CSS Workflow Icons 

Build and publish spectrum-css workflow svg icons and svg sprite sheet for [Spectrum CSS](https://github.com/adobe/spectrum-css).

### Setup

```
yarn install
yarn install -g http-server
```

### For external user

Run `yarn run build` will generate the ready to publish package in `dist/`.

Run `http-server dist/ -o` to see the mini-site for all the workflow icons.

### For adobe user

1. Make sure connect to corp network.
2. Run `yarn add @a4u/a4u-collection-react-spectrum-open-source-release` and `yarn add @a4u/a4u-collection-spectrum-css-release` to update the icon set from Adobe corp artifactory.
3. Run `yarn run build-icons` to rebuild the `icons/` folder.
4. Run `yarn run build` to generate the ready to publish package in `dist/`
5. Preview the icons with `http-server dist/ -o`

### CSS Custom Properties

We will be moving to include [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) as fill attributes in icons.

Example:
```svg
<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
  <path d="M9 1.889A7.111 7.111 0 1 0 16.111 9 7.111 7.111 0 0 0 9 1.889zM14.333 9a5.308 5.308 0 0 1-.986 3.09L5.91 4.653A5.333 5.333 0 0 1 14.334 9h-.001zM3.666 9a5.309 5.309 0 0 1 .986-3.09l7.437 7.438A5.333 5.333 0 0 1 3.667 9h-.001z" fill="var(--iconFill, #fff)"/>
  <path d="M9 1.889A7.111 7.111 0 1 0 9 16.11 7.111 7.111 0 0 0 9 1.89m4.347 10.201L5.91 4.653a5.333 5.333 0 0 1 7.437 7.437M9 14.334A5.333 5.333 0 0 1 4.653 5.91l7.437 7.438a5.33 5.33 0 0 1-3.09.986M9 .89c4.472 0 8.111 3.639 8.111 8.111S13.472 17.111 9 17.111.889 13.472.889 9 4.528.889 9 .889zm4.095 9.535c.158-.453.24-.932.238-1.422 0-1.63-.899-3.106-2.346-3.853a4.351 4.351 0 0 0-3.41-.243l5.518 5.518zm-2.672 2.67L4.905 7.577a4.298 4.298 0 0 0-.238 1.422c0 1.63.898 3.106 2.346 3.853a4.351 4.351 0 0 0 3.41.244z" fill="var(--iconBorder, #010101)" opacity=".51"/>
</svg>
```

Although not all icons are currently using this properties, we'll be migrating more to use them. Here is the list of planned properties names:

* `iconCutout`
* `iconBackground`
* `iconFillStrong`
* `iconFill`
* `iconFillMedium`
* `iconFillPale`
* `iconFillLight`
* `iconBlue`
* `iconGreen`
* `iconRed`
* `iconOrange`
* `iconPurple`
* `iconIndigo`
* `iconCelery`
* `iconMagenta`
* `iconYellow`
* `iconFuchsia`
* `iconSeafoam`
* `iconChartreuse`

### Contributing

Contributions are welcomed! Read the [Contributing Guide](./.github/CONTRIBUTING.md) for more information.

### Licensing

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.

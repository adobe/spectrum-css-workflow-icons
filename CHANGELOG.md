# @adobe/spectrum-css-workflow-icons

## 3.0.0

### Major Changes

-   [#36](https://github.com/adobe/spectrum-css-workflow-icons/pull/36) [`9ce1a14`](https://github.com/adobe/spectrum-css-workflow-icons/commit/9ce1a149dd3e37638898e27ac511d47219eb4947) Thanks [@castastrophe](https://github.com/castastrophe)! - refactor: migration of icon library to support Spectrum 2

    **Breaking change**

    Icon sets have been refactored to provide a more consistent and maintainable set of icons.

    -   No longer provided in 3 different formats: 18 (small), 24 (large), and color
    -   All icons provided in 20x20 viewboxes except where noted (i.e., 22x20)
    -   No "color" sets, however all icons are shipped with custom property hooks

    See the MIGRATION.md document for detailed information on how to migrate to the new set.

    Additional build tooling and project architecture has been modernized to support a more streamlined delivery system for icons.

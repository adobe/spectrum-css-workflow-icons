# @adobe/spectrum-css-workflow-icons

## 5.0.0

### Major Changes

-   [#50](https://github.com/adobe/spectrum-css-workflow-icons/pull/50) [`7eff715`](https://github.com/adobe/spectrum-css-workflow-icons/commit/7eff715a9c3a441a3a7e930fcf8782770e2d296a) Thanks [@pfulton](https://github.com/pfulton)! - feat!: take in 6.0.0 a4u package, drop react icons

    **BREAKING CHANGE:**

    -   Removes React icons from the project
    -   Takes in the `6.0.0` A4U package which also removes React icons

    Additionally:

    -   Refactors the project code to remove references to React

## 4.1.0

### Minor Changes

-   [#48](https://github.com/adobe/spectrum-css-workflow-icons/pull/48) [`5865ee2`](https://github.com/adobe/spectrum-css-workflow-icons/commit/5865ee2212ff587a9eb9610fc7cb2a4dda05253c) Thanks [@pfulton](https://github.com/pfulton)! - feat: update to 4.1.0 a4u release

    Adds new S2 workflow icons based upon a new release from the Icons team.

    Specifically:

    ### Added

    -   S2_Icon_ABC_20_N.svg
    -   S2_Icon_App_20_N.svg
    -   S2_Icon_Bookmark_20_N.svg
    -   S2_Icon_Building_20_N.svg
    -   S2_Icon_CallCenter_20_N.svg
    -   S2_Icon_ChartBarVert_20_N.svg
    -   S2_Icon_ChartPie_20_N.svg
    -   S2_Icon_ChartTrend_20_N.svg
    -   S2_Icon_Chat_20_N.svg
    -   S2_Icon_ChevronDoubleLeft_20_N.svg
    -   S2_Icon_ChevronDoubleRight_20_N.svg
    -   S2_Icon_ChevronUp_20_N.svg
    -   S2_Icon_Code_20_N.svg
    -   S2_Icon_Compare_20_N.svg
    -   S2_Icon_DataRefresh_20_N.svg
    -   S2_Icon_Enterprise_20_N.svg
    -   S2_Icon_Export_20_N.svg
    -   S2_Icon_FolderSearch_20_N.svg
    -   S2_Icon_Import_20_N.svg
    -   S2_Icon_Key_20_N.svg
    -   S2_Icon_PeopleGroup_20_N.svg
    -   S2_Icon_SaveFloppy_20_N.svg
    -   S2_Icon_SpeedFast_20_N.svg
    -   S2_Icon_UserSettings_20_N.svg
    -   S2_Icon_ViewGridFluid_20_N.svg

## 4.0.0

### Major Changes

-   [#40](https://github.com/adobe/spectrum-css-workflow-icons/pull/40) [`3bd0456`](https://github.com/adobe/spectrum-css-workflow-icons/commit/3bd04568aaa769753098acba7aae7dea37586bf3) Thanks [@pfulton](https://github.com/pfulton)! - BREAKING CHANGE: consumes `v3.5.3` (released on Aug 30, 2024) of `@a4u/a4u-s2-icon-global-set-open-source`, bringing this project up-to-date from several previous major version releases which included additions, changes, and removals.

    A detailed changelog for the differences between the previously consumed version (`2.0.0`) and this new version can be found in the [Pull Request](https://github.com/adobe/spectrum-css-workflow-icons/pull/40) details.

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

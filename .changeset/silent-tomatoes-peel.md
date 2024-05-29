---
"@adobe/spectrum-css-workflow-icons": major
---

refactor: migration of icon library to support Spectrum 2

**Breaking change**

Icon sets have been refactored to provide a more consistent and maintainable set of icons.

- No longer provided in 3 different formats: 18 (small), 24 (large), and color
- All icons provided in 20x20 viewboxes except where noted (i.e., 22x20)
- No "color" sets, however all icons are shipped with custom property hooks

See the MIGRATION.md document for detailed information on how to migrate to the new set.

Additional build tooling and project architecture has been modernized to support a more streamlined delivery system for icons.

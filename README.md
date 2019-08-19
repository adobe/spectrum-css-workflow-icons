# Spectrum-CSS Workflow Icons 

Build and explore spectrum-css workflow icons

### Setup

```
npm install
npm install -g http-server
```

### For external user

Run `npm run build` will generate the ready to publish package in dist/.

Run `http-server dist/ -o` to see the mini site for workflow icons

### For adobe user

1. Make sure connect to corp network.
2. Run `npm install` to update the icons from A4U system.
3. Run `npm run build-icons` to rebuild the icons/ folder.
4. Run `npm run build` to generate the ready to publish package in dist/
5. Preview the icons with `http-server dist/ -o`

### Contributing

Contributions are welcomed! Read the [Contributing Guide](./.github/CONTRIBUTING.md) for more information.

### Licensing

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.

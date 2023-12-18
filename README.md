Node package defining standard linting rules for React projects.

To use:
- Install the package: `npm install eslint-config-matcor`
- Add the following to your project's `package.json`:
  ```
  "eslintConfig": {
      "extends": [
        "matcor"
      ]
    },
  ```
  Note, if your `package.json` already contains an "eslintConfig" section that should be replaced with this. Likewise if you have a `.eslintrc.json` file, that should be removed as well.

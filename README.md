# Opinionated React Config (ORC)

Node package defining standard linting rules for React projects.

## How to Use

- Install the package: `npm install eslint-config-orc`
- Add the following to your project's `package.json`:
  ```
  "eslintConfig": {
      "extends": [
        "orc"
      ]
    },
  ```
  Note, if your `package.json` already contains an "eslintConfig" section that should be replaced with this. Likewise if you have a `.eslintrc.json` file, that should be removed as well.

## Overview of Rules

- Designed to be used with React apps written in TypeScript
- Max line length of 120
- No semicolons at the end of lines
- Single quotes for strings
- State and state setter names must be consistent e.g. `data` & `setData`
- Indention level of 2 spaces
- Use function expression syntax for defining functions, e.g. const `x = () => {}`
- Don't allow relative imports to parent folders, e.g. `import x from '../components'`
- Imports must be ordered alphabetically and grouped as:
  - React imports
  - External imports
  - Internal imports

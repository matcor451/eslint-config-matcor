const { ESLint } = require("eslint");
const eslint = new ESLint({ overrideConfigFile: 'index.js' });

const getErrorsByMessage = (lintResults, expectedMessage) => (
  lintResults[0].messages.filter(message => message.message.includes(expectedMessage))
);

module.exports = {
  linter: eslint,
  getErrorsByMessage: getErrorsByMessage
}

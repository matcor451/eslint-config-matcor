import { ESLint } from 'eslint'

const eslint = new ESLint({ overrideConfigFile: 'index.js' })

const getErrorsByMessage = (lintResults, expectedMessage) => (
  lintResults[0].messages.filter(message => message.message.includes(expectedMessage))
)

const getErrorsByRuleId = (lintResults, ruleId) => (
  lintResults[0].messages.filter(message => message.ruleId === ruleId)
)

module.exports = {
  linter: eslint,
  getErrorsByMessage,
  getErrorsByRuleId
}

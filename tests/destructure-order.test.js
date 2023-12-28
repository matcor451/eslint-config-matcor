import { linter, getErrorsByRuleId } from './config.js'
// const errorMessage = 'Expected object keys to be in sorted order. Expected a to be before b.'
const ruleId = 'sort-destructure-keys/sort-destructure-keys'

describe('Test desctructure rule', () => {
  it('test OK', async () => {
    const results = await linter.lintText('const { a, b } = x')

    expect(getErrorsByRuleId(results, ruleId)).toHaveLength(0)
  })

  it('test with wrong order', async () => {
    const results = await linter.lintText('const { b, a } = x')

    expect(getErrorsByRuleId(results, ruleId)).toHaveLength(1)
  })
})

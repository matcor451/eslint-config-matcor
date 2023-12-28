import { getErrorsByRuleId, linter } from './config.js'

const ruleId = 'sort-destructure-keys/sort-destructure-keys'

describe('Test destructure rule', () => {
  it('test OK', async () => {
    const results = await linter.lintText('const { a, b } = x')

    expect(getErrorsByRuleId(results, ruleId)).toHaveLength(0)
  })

  it('test with wrong order', async () => {
    const results = await linter.lintText('const { b, a } = x')

    expect(getErrorsByRuleId(results, ruleId)).toHaveLength(1)
  })
})

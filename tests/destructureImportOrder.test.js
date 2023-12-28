import { getErrorsByRuleId, linter } from './config.js'

const ruleId = 'sort-imports'

describe('Test import destructure rule', () => {
  it('test OK', async () => {
    const results = await linter.lintText("import { a, b } from 'x'")

    expect(getErrorsByRuleId(results, ruleId)).toHaveLength(0)
  })

  it('test with wrong order', async () => {
    const results = await linter.lintText("import { b, a } from 'x'")

    expect(getErrorsByRuleId(results, ruleId)).toHaveLength(1)
  })
})

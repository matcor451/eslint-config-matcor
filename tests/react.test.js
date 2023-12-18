import { linter } from './config.js'

describe('Test react files', () => {
  it('test OK', async () => {
    const results = await linter.lintFiles(['tests/files/reactOK.tsx'])

    expect(results[0].errorCount).toEqual(0)
  })

  it('test mismatched state naming', async () => {
    const results = await linter.lintFiles(['tests/files/mismatchedStateNaming.tsx'])

    expect(results[0].errorCount).toEqual(1)
    expect(results[0].messages[0].ruleId).toEqual('react/hook-use-state')
  })

  it('test bad state case naming', async () => {
    const results = await linter.lintFiles(['tests/files/badStateCasing.tsx'])

    expect(results[0].errorCount).toEqual(1)
    expect(results[0].messages[0].ruleId).toEqual('react/hook-use-state')
  })
})

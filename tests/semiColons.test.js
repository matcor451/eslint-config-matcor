import { getErrorsByMessage, linter } from './config.js'
const errorMessage = 'Extra semicolon'

describe('Test semicolon rule', () => {
  it('test OK', async () => {
    const results = await linter.lintText('const x = 1')

    expect(getErrorsByMessage(results, errorMessage)).toHaveLength(0)
  })

  it('test with semicolon', async () => {
    const results = await linter.lintText('const x = 1;')

    expect(getErrorsByMessage(results, errorMessage)).toHaveLength(1)
  })
})

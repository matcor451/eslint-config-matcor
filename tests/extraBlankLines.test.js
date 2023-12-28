import { getErrorsByMessage, linter } from './config.js'

const errorMessage = 'More than 1 blank line not allowed'

describe('Test blank lines rule', () => {
  it('test one line', async () => {
    const results = await linter.lintText(
      `const x = 1
      
      const y = 1`
    )

    expect(getErrorsByMessage(results, errorMessage)).toHaveLength(0)
  })

  it('test two lines', async () => {
    const results = await linter.lintText(
      `const x = 1


      const y = 1`
    )

    expect(getErrorsByMessage(results, errorMessage)).toHaveLength(1)
  })

  it('test three lines', async () => {
    const results = await linter.lintText(
      `const x = 1



      const y = 1`
    )

    expect(getErrorsByMessage(results, errorMessage)).toHaveLength(1)
  })
})

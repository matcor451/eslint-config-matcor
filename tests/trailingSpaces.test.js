const { linter, getErrorsByMessage } = require('./config.js');
const errorMessage = 'Trailing spaces not allowed'

describe('Test no-trailing-spaces-rule', () => {
  it('test OK', async () => {
    const results = await linter.lintText('const x = 1')

    expect(getErrorsByMessage(results, errorMessage)).toHaveLength(0)
  })

  it('test trailing space', async () => {
    const results = await linter.lintText('const x = 1 ')

    expect(getErrorsByMessage(results, errorMessage)).toHaveLength(1)
  })

  it('test trailing tab', async () => {
    const results = await linter.lintText('const x = 1\t')

    expect(getErrorsByMessage(results, errorMessage)).toHaveLength(1)
  })
})

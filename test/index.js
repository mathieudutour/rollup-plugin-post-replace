const rollup = require('rollup')
const test = require('tape')

const replace = require('../index')

process.chdir(__dirname)

test('replaces strings', assert => rollup.rollup({
  entry: 'samples/basic/main.js',
  treeshake: false,
  plugins: [
    replace({
      ENV: "'production'"
    })
  ]
}).then((bundle) => {
  const generated = bundle.generate()
  const code = generated.code

  assert.true(code.indexOf("'production' !== 'production'") !== -1)
  assert.end()
}))

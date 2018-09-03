const requireLang = require.context(
  './',
  true,
  /\.json$/
)

const messages = {}

for (const file of requireLang.keys()) {
  if (file === './index.js') continue

  const path = file.replace(/(\.\/|\.json$)/g, '').split('/')

  path.reduce((o, s, i) => {
    o[s] = i + 1 === path.length
      ? requireLang(file)
      : o[s] || {}

    return o[s]
  }, messages)
}

export default messages

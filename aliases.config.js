const path = require('path')

function resolveSrc(_path) {
  return path.join(__dirname, _path)
}

const aliases = {
  '@src': 'src',
  '@router': 'src/router',
  '@views': 'src/router/_backup/views',
  '@pages': 'src/pages',
  '@layouts': 'src/router/_backup/layouts',
  '@components': 'src/components',
  '@assets': 'src/assets',
  '@utils': 'src/utils',
  '@state': 'src/state',
  '@design': 'src/design/custom-bootstrap.scss',
  '@bootstrap': 'node_modules/bootstrap/scss/bootstrap.scss',
}

module.exports = {
  webpack: {},
  jest: {},
}

for (const alias in aliases) {
  module.exports.webpack[alias] = resolveSrc(aliases[alias])
  module.exports.jest['^' + alias + '/(.*)$'] =
    '<rootDir>/' + aliases[alias] + '/$1'
}

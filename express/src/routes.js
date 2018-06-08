const express = require('express/index')
const app = express()
const pug = require('pug')
const fs = require('fs')
const { query, GAME_DETAILS } = require('./graphql.js')

const placeholder = '<meta name=placeholder>'

const render = pug.compileFile('./src/index.pug');

fs.readFile('/vue_dist/index.html', 'utf-8', (err, data) => {
  if (err) {
    throw new Error(err)
  }
  app.get('/games/:uuid', (req, res) => {
    const uuid = req.params.uuid
    query(GAME_DETAILS, { uuid }).then(graphqlResult => {
      const game = graphqlResult.data.game
      const result = render({game});
      const html = data.replace(placeholder, result)
      res.send(html)
      console.log(game)
    }).catch(e => { console.log(e.result.errors) })
  })
  app.listen(3000, () => console.log('Example app listening on port 3000!'))
})






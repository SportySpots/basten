const express = require('express/index')
const app = express()
const pug = require('pug')
const fs = require('fs')
const { query, GAME_DETAILS } = require('./graphql.js')

const placeholder = '<meta name=placeholder>'

const render = pug.compileFile('./src/index.pug');

const appleAppSiteAssociationObject = {
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "FD94WWSEG4.com.sportyspots.ios",
        "paths": [ "/games/*" ]
      }
    ]
  }
}

// fs.readFile('/vue_dist/index.html', 'utf-8', (err, data) => {
fs.readFile('./src/game.html', 'utf-8', (err, htmlTemplate) => {
  if (err) {
    throw new Error(err)
  }
  app.get('/games/:uuid', (req, res) => {
    const uuid = req.params.uuid
    query(GAME_DETAILS, { uuid }).then(graphqlResult => {
      const game = graphqlResult.data.game
      if (game) {
        const result = render({game});
        const html = htmlTemplate.replace(placeholder, result)
        res.send(html)
      } else {
        res.send(htmlTemplate)
      }
    }).catch(e => {
      if (e.result && e.result.errors) {
        console.log(e.result.errors)
        res.send(htmlTemplate)
      } else console.log(e)
    })
  })
  app.get(/apple-app-site-association\/?/, (req, res) => {
    res.set({
      'Content-Disposition': 'attachment; filename="apple-app-site-association"',
      'Content-Type': 'application/json',
    })
    res.send(appleAppSiteAssociationObject)
  })
  app.listen(3000, () => console.log('Example app listening on port 3000!'))
})






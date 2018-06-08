// App-specific config

// Using CommonJS instead of ES2015+ export, because we also need to
// provide this object to Webpack in vue.config.js.
module.exports = {
  title: 'SportySpots',
  description: 'Play sports, anywhere, anytime with anyone',
  seedorfGraphQLUrl: process.env.VUE_APP_GRAPHQL_URL,
  seedorfRESTUrl: process.env.VUE_APP_REST_URL,
}

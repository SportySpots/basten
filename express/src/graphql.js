const gql = require('graphql-tag');
const { HttpLink } = require('apollo-link-http');
const { execute, makePromise } = require('apollo-link');
const fetch = require('node-fetch')

const graphqlURL = process.env.VUE_APP_GRAPHQL_URL

const link = new HttpLink({
  uri: graphqlURL,
  fetch,
  headers: {
    cookie: null
  },
  fetchOptions: {
    // mode: 'no-cors',
  }
});

const query = async (q, variables = {}) => {
  const operation = {
    query: q,
    variables,
    // operationName: { },
    context: {},
    extensions: {}
  };
  return makePromise(execute(link, operation))
}

const GAME_DETAILS = gql`query game($uuid: UUID) {
    game(uuid: $uuid) {
        uuid
        description
        capacity
        name
        start_time
        end_time
        status
        organizer {
            uuid
            first_name
            last_name
        }
        attendees {
            uuid
            created_at
            status
            user {
                uuid
                first_name
                last_name
            }
        }
        spot {
            uuid
            name
            images {
                uuid
                image
            }
            address {
                uuid
                lat
                lng
            }
        }
        sport {
            uuid,
            name
        }
    }
}`

module.exports = {
  link,
  query,
  GAME_DETAILS
}
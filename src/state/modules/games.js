import {execute, makePromise} from 'apollo-link';
import {HttpLink} from 'apollo-link-http';
import gql from 'graphql-tag';

const uri = 'https://training.sportyspots.com/graphql';
const link = new HttpLink({
    uri,
    headers: {},
    fetchOptions: {
      // mode: 'no-cors',
    }
  }
);

export const state = {
  games: [],
}

export const getters = {}

export const mutations = {
  CACHE_GAME(state, game) {
    state.push(game)
  },
}

export const actions = {
  fetchGame({commit, state, rootState}, {uuid}) {
    const operation = {
      query: gql`query game($uuid: UUID) {
          game(uuid: $uuid) {
              uuid
              description
              spot {
                  name
              }
          }
      }`,
      variables: {uuid},
      // operationName: { },
      context: {},
      extensions: {}
    };

    makePromise(execute(link, operation))
      .then(data => console.log(`received data ${JSON.stringify(data, null, 2)}`))
      .catch(error => console.log(`received error ${error}`))


    // // 1. Check if we already have the user as a current user.
    // const { currentUser } = rootState.auth
    // if (currentUser && currentUser.username === username) {
    //   return Promise.resolve(currentUser)
    // }
    //
    // // 2. Check if we've already fetched and cached the user.
    // const matchedUser = state.cached.find(user => user.name === username)
    // if (matchedUser) {
    //   return Promise.resolve(currentUser)
    // }
    //
    // // 3. Fetch the user from the API and cache it in case
    // //    we need it again in the future.
    // return axios.get(`/users/${username}`).then(response => {
    //   const user = response.data
    //   commit('CACHE_USER', user)
    //   return user
    // })
  },
}
